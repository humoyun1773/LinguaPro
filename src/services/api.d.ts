type ApiResult<T> = {
  success: boolean
  data: T
  error?: string
  message?: string
}

export function fetchTeachers(
  filters?: Record<string, unknown>,
): Promise<ApiResult<never[]>>

export function fetchCourses(
  filters?: Record<string, unknown>,
): Promise<ApiResult<never[]>>

export function fetchStudents(
  filters?: Record<string, unknown>,
): Promise<ApiResult<never[]>>

export function login(
  username: string,
  password: string,
): Promise<ApiResult<Record<string, unknown>>>
