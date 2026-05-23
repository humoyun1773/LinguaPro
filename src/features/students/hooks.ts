import { useState, useCallback } from "react"
import type {
  Student,
  StudentFilters,
  CreateStudentPayload,
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
import { STUDENT_ENDPOINTS } from "../constants/api"

/**
 * Hook to fetch all students
 */
export const useStudents = (
  initialFilters?: StudentFilters,
): UseListResponse<Student> => {
  const [data, setData] = useState<Student[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const queryString = buildQueryString(initialFilters)
      const endpoint = STUDENT_ENDPOINTS.LIST + queryString
      const response = await apiGet<Student[] | { results: Student[] }>(
        endpoint,
      )

      if (response.success) {
        const students = Array.isArray(response.data)
          ? response.data
          : response.data?.results || []
        setData(students)
      } else {
        setError(response.error || "Failed to load students")
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
 * Hook to fetch a single student
 */
export const useStudent = (id: number): UseItemResponse<Student> => {
  const [data, setData] = useState<Student | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refetch = useCallback(async () => {
    if (!id) {
      setError("Student ID is required")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await apiGet<Student>(STUDENT_ENDPOINTS.DETAIL(id))

      if (response.success) {
        setData(handleApiResponse(response))
      } else {
        setError(response.error || "Failed to load student")
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
 * Hook to create a student
 */
export const useCreateStudent = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(async (payload: CreateStudentPayload) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await apiPost<Student>(STUDENT_ENDPOINTS.CREATE, payload)

      if (response.success) {
        setSuccess(true)
        return handleApiResponse(response)
      } else {
        setError(response.error || "Failed to create student")
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
 * Hook to update a student
 */
export const useUpdateStudent = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(
    async (payload: Partial<CreateStudentPayload>) => {
      if (!id) {
        setError("Student ID is required")
        return null
      }

      setLoading(true)
      setError(null)
      setSuccess(false)

      try {
        const response = await apiPatch<Student>(
          STUDENT_ENDPOINTS.UPDATE(id),
          payload,
        )

        if (response.success) {
          setSuccess(true)
          return handleApiResponse(response)
        } else {
          setError(response.error || "Failed to update student")
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
 * Hook to delete a student
 */
export const useDeleteStudent = (id: number) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const mutate = useCallback(async () => {
    if (!id) {
      setError("Student ID is required")
      return null
    }

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await apiDelete<void>(STUDENT_ENDPOINTS.DELETE(id))

      if (response.success) {
        setSuccess(true)
        return true
      } else {
        setError(response.error || "Failed to delete student")
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
