// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://185.190.143.64:8083/api'

/**
 * Generic API request helper function
 */
const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('API request failed:', error)
    return { success: false, error: error.message, data: null }
  }
}

/**
 * Fetch all teachers
 */
export const fetchTeachers = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams()

    if (filters.specialization)
      queryParams.append('specialization', filters.specialization)
    if (filters.minRating) queryParams.append('min_rating', filters.minRating)

    const endpoint = `/groups/teachers-list/${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    const response = await apiRequest(endpoint)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Teachers fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to load teachers',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Fetch single teacher by ID
 */
export const fetchTeacherById = async (id) => {
  try {
    const response = await apiRequest(`/groups/teachers-list/${id}/`)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Teacher fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Teacher not found',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Fetch all courses
 */
export const fetchCourses = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams()

    if (filters.level) queryParams.append('level', filters.level)
    if (filters.maxPrice) queryParams.append('max_price', filters.maxPrice)
    if (filters.instructor_id)
      queryParams.append('instructor_id', filters.instructor_id)
    if (filters.minRating) queryParams.append('min_rating', filters.minRating)
    if (filters.sortBy) queryParams.append('sort_by', filters.sortBy)

    const endpoint = `/courses/list/${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    const response = await apiRequest(endpoint)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Courses fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to load courses',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Fetch single course by ID
 */
export const fetchCourseById = async (id) => {
  try {
    const response = await apiRequest(`/courses/update-delete/${id}/`)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Course fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Course not found',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Fetch courses by instructor
 */
export const fetchCoursesByInstructor = async (instructorId) => {
  try {
    const response = await apiRequest(
      `/courses/list/?instructor_id=${instructorId}`
    )

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Instructor courses fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to load instructor courses',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Enroll student in a course
 */
export const enrollCourse = async (courseId, studentData) => {
  try {
    if (!courseId || !studentData) {
      return {
        success: false,
        data: null,
        error: 'Course ID and student data are required',
      }
    }

    const response = await apiRequest(`/enrollments/`, {
      method: 'POST',
      body: JSON.stringify({
        courseId,
        student: studentData,
      }),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Successfully enrolled in course',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to enroll in course',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Get course with instructor details
 */
export const getCourseWithInstructor = async (courseId) => {
  try {
    const response = await apiRequest(
      `/courses/update-delete/${courseId}/?include_instructor=true`
    )

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Course with instructor fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to load course with instructor',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Fetch all students
 */
export const fetchStudents = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams()

    if (filters.status) queryParams.append('status', filters.status)
    if (filters.module) queryParams.append('module', filters.module)
    if (filters.minScore) queryParams.append('min_score', filters.minScore)

    const endpoint = `/groups/students-list/${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    const response = await apiRequest(endpoint)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Students fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to load students',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

/**
 * Fetch single student by ID
 */
export const fetchStudentById = async (id) => {
  try {
    const response = await apiRequest(`/groups/students-list/${id}/`)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Student fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Student not found',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
}

export default {
  fetchTeachers,
  fetchTeacherById,
  fetchCourses,
  fetchCourseById,
  fetchCoursesByInstructor,
  enrollCourse,
  getCourseWithInstructor,
  fetchStudents,
  fetchStudentById,
}
