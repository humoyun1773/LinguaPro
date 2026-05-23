/**
 * API Base Configuration
 */
export const API_CONFIG = {
  BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://185.190.143.64:8083/api",
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
}

/**
 * Authentication Endpoints
 */
export const AUTH_ENDPOINTS = {
  LOGIN: "/token/",
  LOGOUT: "/auth/logout/",
  REFRESH: "/auth/refresh/",
  REGISTER: "/auth/register/",
} as const

/**
 * Teacher Endpoints
 */
export const TEACHER_ENDPOINTS = {
  LIST: "/teachers/",
  DETAIL: (id: number) => `/teachers/${id}/`,
  CREATE: "/teachers/",
  UPDATE: (id: number) => `/teachers/${id}/`,
  DELETE: (id: number) => `/teachers/${id}/`,
  SEARCH: "/teachers/search/",
} as const

/**
 * Student Endpoints
 */
export const STUDENT_ENDPOINTS = {
  LIST: "/students/",
  DETAIL: (id: number) => `/students/${id}/`,
  CREATE: "/students/",
  UPDATE: (id: number) => `/students/${id}/`,
  DELETE: (id: number) => `/students/${id}/`,
  SEARCH: "/students/search/",
} as const

/**
 * Group Endpoints
 */
export const GROUP_ENDPOINTS = {
  LIST: "/groups/",
  DETAIL: (id: number) => `/groups/${id}/`,
  CREATE: "/groups/",
  UPDATE: (id: number) => `/groups/${id}/`,
  DELETE: (id: number) => `/groups/${id}/`,
  MEMBERS: (id: number) => `/groups/${id}/members/`,
  ADD_MEMBER: (id: number) => `/groups/${id}/add-student/`,
  REMOVE_MEMBER: (id: number) => `/groups/${id}/remove-student/`,
  SEARCH: "/groups/search/",
} as const

/**
 * Course Endpoints (if needed)
 */
export const COURSE_ENDPOINTS = {
  LIST: "/courses/",
  DETAIL: (id: number) => `/courses/${id}/`,
  CREATE: "/courses/",
  UPDATE: (id: number) => `/courses/${id}/`,
  DELETE: (id: number) => `/courses/${id}/`,
  BY_INSTRUCTOR: (instructorId: number) =>
    `/courses/?instructor_id=${instructorId}`,
  ENROLL: "/enrollments/",
} as const

/**
 * Query Keys for React Query (if used)
 */
export const QUERY_KEYS = {
  TEACHERS: {
    ALL: ["teachers"] as const,
    LIST: (filters: string) => ["teachers", "list", filters] as const,
    DETAIL: (id: number) => ["teachers", "detail", id] as const,
  },
  STUDENTS: {
    ALL: ["students"] as const,
    LIST: (filters: string) => ["students", "list", filters] as const,
    DETAIL: (id: number) => ["students", "detail", id] as const,
  },
  GROUPS: {
    ALL: ["groups"] as const,
    LIST: (filters: string) => ["groups", "list", filters] as const,
    DETAIL: (id: number) => ["groups", "detail", id] as const,
    MEMBERS: (id: number) => ["groups", "members", id] as const,
  },
} as const

/**
 * HTTP Methods
 */
export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const

/**
 * Status Codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const
