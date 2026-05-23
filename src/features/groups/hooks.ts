import { useState, useCallback } from "react"
import type {
  Group,
  GroupFilters,
  CreateGroupPayload,
  GroupMember,
  UseListResponse,
  UseItemResponse,
} from "../types"
import {
  apiGet,
  apiPost,
  apiPatch,
  apiDelete,
  buildQueryString,
  handleApiResponse,
} from "../services/api.service"
import { GROUP_ENDPOINTS } from "../constants/api"

/**
 * Hook to fetch all groups
 */
export const useGroups = (
  initialFilters?: GroupFilters,
): UseListResponse<Group> => {
  const [data, setData] = useState<Group[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const queryString = buildQueryString(initialFilters)
      const endpoint = GROUP_ENDPOINTS.LIST + queryString
      const response = await apiGet<Group[] | { results: Group[] }>(endpoint)

      if (response.success) {
        const groups = Array.isArray(response.data)
          ? response.data
          : response.data?.results || []
        setData(groups)
      } else {
        setError(response.error || "Failed to load groups")
        setData([])
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(message)
      setData([])
    } finally {
      setLoading(false)
    }
  }, [initialFilters])

  // Fetch on mount
  useState(() => {
    refetch()
  })

  return { data, loading, error, refetch }
}

/**
 * Hook to fetch a single group
 */
export const useGroup = (id: number): UseItemResponse<Group> => {
  const [data, setData] = useState<Group | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    if (!id) {
      setError("Group ID is required")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await apiGet<Group>(GROUP_ENDPOINTS.DETAIL(id))

      if (response.success) {
        setData(handleApiResponse(response))
      } else {
        setError(response.error || "Failed to load group")
        setData(null)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [id])

  // Fetch on mount
  useState(() => {
    if (id) refetch()
  })

  return { data, loading, error, refetch }
}

/**
 * Hook to fetch group members
 */
export const useGroupMembers = (id: number): UseListResponse<GroupMember> => {
  const [data, setData] = useState<GroupMember[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    if (!id) {
      setError("Group ID is required")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await apiGet<GroupMember[] | { results: GroupMember[] }>(
        GROUP_ENDPOINTS.MEMBERS(id),
      )

      if (response.success) {
        const members = Array.isArray(response.data)
          ? response.data
          : response.data?.results || []
        setData(members)
      } else {
        setError(response.error || "Failed to load group members")
        setData([])
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(message)
      setData([])
    } finally {
      setLoading(false)
    }
  }, [id])

  // Fetch on mount
  useState(() => {
    if (id) refetch()
  })

  return { data, loading, error, refetch }
}

/**
 * Hook to create a group
 */
export const useCreateGroup = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(async (payload: CreateGroupPayload) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await apiPost<Group>(GROUP_ENDPOINTS.CREATE, payload)

      if (response.success) {
        setSuccess(true)
        return handleApiResponse(response)
      } else {
        setError(response.error || "Failed to create group")
        return null
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { mutate, loading, error, success }
}

/**
 * Hook to update a group
 */
export const useUpdateGroup = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(
    async (payload: Partial<CreateGroupPayload>) => {
      if (!id) {
        setError("Group ID is required")
        return null
      }

      setLoading(true)
      setError(null)
      setSuccess(false)

      try {
        const response = await apiPatch<Group>(
          GROUP_ENDPOINTS.UPDATE(id),
          payload,
        )

        if (response.success) {
          setSuccess(true)
          return handleApiResponse(response)
        } else {
          setError(response.error || "Failed to update group")
          return null
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    [id],
  )

  return { mutate, loading, error, success }
}

/**
 * Hook to delete a group
 */
export const useDeleteGroup = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(async () => {
    if (!id) {
      setError("Group ID is required")
      return null
    }

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await apiDelete<void>(GROUP_ENDPOINTS.DELETE(id))

      if (response.success) {
        setSuccess(true)
        return true
      } else {
        setError(response.error || "Failed to delete group")
        return null
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }, [id])

  return { mutate, loading, error, success }
}

/**
 * Hook to add student to group
 */
export const useAddStudentToGroup = (groupId: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(
    async (studentId: number) => {
      if (!groupId) {
        setError("Group ID is required")
        return null
      }

      setLoading(true)
      setError(null)
      setSuccess(false)

      try {
        const response = await apiPost<void>(
          GROUP_ENDPOINTS.ADD_MEMBER(groupId),
          { student_id: studentId },
        )

        if (response.success) {
          setSuccess(true)
          return true
        } else {
          setError(response.error || "Failed to add student to group")
          return null
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    [groupId],
  )

  return { mutate, loading, error, success }
}

/**
 * Hook to remove student from group
 */
export const useRemoveStudentFromGroup = (groupId: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(
    async (studentId: number) => {
      if (!groupId) {
        setError("Group ID is required")
        return null
      }

      setLoading(true)
      setError(null)
      setSuccess(false)

      try {
        const response = await apiPost<void>(
          GROUP_ENDPOINTS.REMOVE_MEMBER(groupId),
          { student_id: studentId },
        )

        if (response.success) {
          setSuccess(true)
          return true
        } else {
          setError(response.error || "Failed to remove student from group")
          return null
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    [groupId],
  )

  return { mutate, loading, error, success }
}
