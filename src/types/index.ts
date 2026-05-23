/**
 * API Response Types
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

/**
 * Teacher Types
 */
export interface Teacher {
  id: number
  first_name: string
  last_name: string
  email: string
  phone?: string
  bio?: string
  avatar?: string
  specialization?: string
  rating?: number
  experience_years?: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface TeacherFilters {
  specialization?: string
  minRating?: number
  search?: string
}

export interface CreateTeacherPayload {
  first_name: string
  last_name: string
  email: string
  phone?: string
  specialization?: string
  password: string
}

/**
 * Student Types
 */
export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  phone?: string
  avatar?: string
  status: "active" | "inactive" | "suspended"
  group_id?: number
  enrollment_date: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface StudentFilters {
  status?: string
  group_id?: number
  search?: string
}

export interface CreateStudentPayload {
  first_name: string
  last_name: string
  email: string
  phone?: string
  password: string
}

/**
 * Group Types
 */
export interface Group {
  id: number
  name: string
  description?: string
  teacher_id: number
  teacher?: Teacher
  status: "active" | "inactive" | "completed"
  max_students?: number
  current_students_count?: number
  start_date: string
  end_date?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface GroupFilters {
  teacher_id?: number
  status?: string
  search?: string
}

export interface CreateGroupPayload {
  name: string
  description?: string
  teacher_id: number
  status?: string
  max_students?: number
  start_date: string
  end_date?: string
}

export interface GroupMember extends Student {
  joined_date: string
}

/**
 * Auth Types
 */
export interface LoginPayload {
  username: string
  password: string
}

export interface LoginResponse {
  access?: string
  token?: string
  access_token?: string
  user?: {
    id: number
    username: string
    email: string
    first_name?: string
    last_name?: string
  }
}

/**
 * Error Types
 */
export interface ApiError {
  status: number
  message: string
  detail?: string
}

/**
 * Generic List Response Hook
 */
export interface UseListResponse<T> {
  data: T[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * Generic Item Response Hook
 */
export interface UseItemResponse<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * Mutation Response Hook
 */
export interface UseMutationResponse<T> {
  mutate: (payload: any) => Promise<T | null>
  loading: boolean
  error: string | null
  success: boolean
}
