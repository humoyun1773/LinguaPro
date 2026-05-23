import { useState, useEffect } from "react"

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

/**
 * Custom hook for fetching data from API
 * @param fetchFn - Async function that returns the data
 * @param dependencies - Dependencies array for useEffect
 */
export function useFetch<T>(
  fetchFn: () => Promise<{ success: boolean; data: T; error?: string }>,
  dependencies?: unknown[],
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }))
        const result = await fetchFn()

        if (isMounted) {
          if (result.success) {
            setState({
              data: result.data,
              loading: false,
              error: null,
            })
          } else {
            setState({
              data: null,
              loading: false,
              error: result.error || "Failed to fetch data",
            })
          }
        }
      } catch (err) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : "An error occurred",
          })
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, dependencies || [])

  return state
}

export default useFetch
