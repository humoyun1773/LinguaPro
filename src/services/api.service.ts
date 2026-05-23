import type { ApiResponse, ApiError } from "../types"
import { API_CONFIG, HTTP_STATUS } from "../constants/api"

/**
 * Typed API Service with error handling and token management
 */

const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken")
}

const setAuthToken = (token: string | null): void => {
  if (token) {
    localStorage.setItem("authToken", token)
  } else {
    localStorage.removeItem("authToken")
  }
}

export const clearAuthToken = (): void => {
  setAuthToken(null)
}

/**
 * Generic typed API request function
 */
export const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> => {
  try {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`
    const token = getAuthToken()

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    }

    // Add Authorization header if token exists
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    // Handle 401 - Unauthorized
    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      console.warn("401 Unauthorized - Token may be invalid or expired")
      setAuthToken(null)
    }

    // Try to parse error response
    let errorData: Record<string, any> = {}
    try {
      errorData = await response.json()
    } catch {
      // Response is not JSON
    }

    // Handle non-200 responses
    if (!response.ok) {
      const error = new Error(
        errorData.detail ||
          errorData.message ||
          `HTTP ${response.status}: ${response.statusText}`,
      ) as Error & { status?: number }
      error.status = response.status
      throw error
    }

    const data = await response.json()
    return {
      success: true,
      data: data as T,
    }
  } catch (error) {
    const apiError = error as Error & { status?: number }
    console.error("API request error:", apiError)

    return {
      success: false,
      error: apiError.message || "Network error",
    }
  }
}

/**
 * GET request helper
 */
export const apiGet = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    method: "GET",
  })
}

/**
 * POST request helper
 */
export const apiPost = async <T>(
  endpoint: string,
  body: unknown,
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  })
}

/**
 * PATCH request helper
 */
export const apiPatch = async <T>(
  endpoint: string,
  body: unknown,
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    method: "PATCH",
    body: JSON.stringify(body),
  })
}

/**
 * PUT request helper
 */
export const apiPut = async <T>(
  endpoint: string,
  body: unknown,
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
  })
}

/**
 * DELETE request helper
 */
export const apiDelete = async <T>(
  endpoint: string,
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(endpoint, {
    method: "DELETE",
  })
}

/**
 * Build query string from filters object
 */
export const buildQueryString = (filters: Record<string, any> = {}): string => {
  const params = new URLSearchParams()

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, String(value))
    }
  })

  const queryString = params.toString()
  return queryString ? `?${queryString}` : ""
}

/**
 * Handle API response
 */
export const handleApiResponse = <T>(response: ApiResponse<T>): T | null => {
  if (response.success && response.data) {
    return response.data
  }
  if (response.error) {
    console.error("API Error:", response.error)
  }
  return null
}
