import { useState, useCallback } from "react"
import type {
  Teacher,
  TeacherFilters,
  CreateTeacherPayload,
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
import { TEACHER_ENDPOINTS } from "../constants/api"

/**
 * Hook to fetch all teachers
 */
export const useTeachers = (
  initialFilters?: TeacherFilters,
): UseListResponse<Teacher> => {
  const [data, setData] = useState<Teacher[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const queryString = buildQueryString(initialFilters)
      const endpoint = TEACHER_ENDPOINTS.LIST + queryString
      const response = await apiGet<Teacher[] | { results: Teacher[] }>(
        endpoint,
      )

      if (response.success) {
        const teachers = Array.isArray(response.data)
          ? response.data
          : response.data?.results || []
        setData(teachers)
      } else {
        setError(response.error || "Failed to load teachers")
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
 * Hook to fetch a single teacher
 */
export const useTeacher = (id: number): UseItemResponse<Teacher> => {
  const [data, setData] = useState<Teacher | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    if (!id) {
      setError("Teacher ID is required")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await apiGet<Teacher>(TEACHER_ENDPOINTS.DETAIL(id))

      if (response.success) {
        setData(handleApiResponse(response))
      } else {
        setError(response.error || "Failed to load teacher")
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
 * Hook to create a teacher
 */
export const useCreateTeacher = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(async (payload: CreateTeacherPayload) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await apiPost<Teacher>(TEACHER_ENDPOINTS.CREATE, payload)

      if (response.success) {
        setSuccess(true)
        return handleApiResponse(response)
      } else {
        setError(response.error || "Failed to create teacher")
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
 * Hook to update a teacher
 */
export const useUpdateTeacher = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(
    async (payload: Partial<CreateTeacherPayload>) => {
      if (!id) {
        setError("Teacher ID is required")
        return null
      }

      setLoading(true)
      setError(null)
      setSuccess(false)

      try {
        const response = await apiPatch<Teacher>(
          TEACHER_ENDPOINTS.UPDATE(id),
          payload,
        )

        if (response.success) {
          setSuccess(true)
          return handleApiResponse(response)
        } else {
          setError(response.error || "Failed to update teacher")
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
 * Hook to delete a teacher
 */
export const useDeleteTeacher = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(async () => {
    if (!id) {
      setError("Teacher ID is required")
      return null
    }

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await apiDelete<void>(TEACHER_ENDPOINTS.DELETE(id))

      if (response.success) {
        setSuccess(true)
        return true
      } else {
        setError(response.error || "Failed to delete teacher")
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
