// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://185.190.143.64:8083/api'

/**
 * Get stored authentication token
 */
const getAuthToken = () => {
  return localStorage.getItem('authToken')
}

/**
 * Set authentication token
 */
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token)
  } else {
    localStorage.removeItem('authToken')
  }
}

/**
 * Generic API request helper function
 */
const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const token = getAuthToken()

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    // Add Authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const response = await fetch(url, {
      headers,
      ...options,
    })

    if (!response.ok) {
      if (response.status === 401) {
        // Clear invalid token
        setAuthToken(null)
      }
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.detail ||
          errorData.message ||
          `HTTP error! status: ${response.status}`
      )
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
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
    if (filters.search) queryParams.append('search', filters.search)

    const endpoint = `/teachers/${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    const response = await apiRequest(endpoint)

    if (response.success) {
      return {
        success: true,
        data: Array.isArray(response.data)
          ? response.data
          : response.data.results || [],
        message: 'Teachers fetched successfully',
      }
    } else {
      return {
        success: false,
        data: [],
        error: response.error || 'Failed to load teachers',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: [],
      error: error.message,
    }
  }
}

/**
 * Fetch single teacher by ID
 */
export const fetchTeacherById = async (id) => {
  try {
    const response = await apiRequest(`/teachers/${id}/`)

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
 * Create a new teacher
 */
export const createTeacher = async (teacherData) => {
  try {
    const response = await apiRequest('/teachers/', {
      method: 'POST',
      body: JSON.stringify(teacherData),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Teacher created successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to create teacher',
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
 * Update teacher
 */
export const updateTeacher = async (id, teacherData) => {
  try {
    const response = await apiRequest(`/teachers/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(teacherData),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Teacher updated successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to update teacher',
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
 * Delete teacher
 */
export const deleteTeacher = async (id) => {
  try {
    const response = await apiRequest(`/teachers/${id}/`, {
      method: 'DELETE',
    })

    if (response.success) {
      return {
        success: true,
        message: 'Teacher deleted successfully',
      }
    } else {
      return {
        success: false,
        error: response.error || 'Failed to delete teacher',
      }
    }
  } catch (error) {
    return {
      success: false,
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
    if (filters.group_id) queryParams.append('group_id', filters.group_id)
    if (filters.search) queryParams.append('search', filters.search)

    const endpoint = `/students/${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    const response = await apiRequest(endpoint)

    if (response.success) {
      return {
        success: true,
        data: Array.isArray(response.data)
          ? response.data
          : response.data.results || [],
        message: 'Students fetched successfully',
      }
    } else {
      return {
        success: false,
        data: [],
        error: response.error || 'Failed to load students',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: [],
      error: error.message,
    }
  }
}

/**
 * Fetch single student by ID
 */
export const fetchStudentById = async (id) => {
  try {
    const response = await apiRequest(`/students/${id}/`)

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

/**
 * Create a new student
 */
export const createStudent = async (studentData) => {
  try {
    const response = await apiRequest('/students/', {
      method: 'POST',
      body: JSON.stringify(studentData),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Student created successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to create student',
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
 * Update student
 */
export const updateStudent = async (id, studentData) => {
  try {
    const response = await apiRequest(`/students/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(studentData),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Student updated successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to update student',
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
 * Delete student
 */
export const deleteStudent = async (id) => {
  try {
    const response = await apiRequest(`/students/${id}/`, {
      method: 'DELETE',
    })

    if (response.success) {
      return {
        success: true,
        message: 'Student deleted successfully',
      }
    } else {
      return {
        success: false,
        error: response.error || 'Failed to delete student',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}

/**
 * Login user and get authentication token
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.detail || data.message || 'Login failed',
      }
    }

    // Try different token field names
    const token =
      data.access || data.token || data.access_token || data.tokens?.access

    if (token) {
      setAuthToken(token)
      return {
        success: true,
        message: 'Login successful',
        user: data.user || { username },
      }
    } else {
      return {
        success: false,
        error: 'No token received from server',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Network error',
    }
  }
}

/**
 * Logout user
 */
export const logout = () => {
  setAuthToken(null)
  return { success: true }
}

/**
 * Fetch all groups
 */
export const fetchGroups = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams()

    if (filters.teacher_id) queryParams.append('teacher_id', filters.teacher_id)
    if (filters.status) queryParams.append('status', filters.status)
    if (filters.search) queryParams.append('search', filters.search)

    const endpoint = `/groups/${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    const response = await apiRequest(endpoint)

    if (response.success) {
      return {
        success: true,
        data: Array.isArray(response.data)
          ? response.data
          : response.data.results || [],
        message: 'Groups fetched successfully',
      }
    } else {
      return {
        success: false,
        data: [],
        error: response.error || 'Failed to load groups',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: [],
      error: error.message,
    }
  }
}

/**
 * Fetch single group by ID
 */
export const fetchGroupById = async (id) => {
  try {
    const response = await apiRequest(`/groups/${id}/`)

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Group fetched successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Group not found',
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
 * Create a new group
 */
export const createGroup = async (groupData) => {
  try {
    const response = await apiRequest('/groups/', {
      method: 'POST',
      body: JSON.stringify(groupData),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Group created successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to create group',
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
 * Update group
 */
export const updateGroup = async (id, groupData) => {
  try {
    const response = await apiRequest(`/groups/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(groupData),
    })

    if (response.success) {
      return {
        success: true,
        data: response.data,
        message: 'Group updated successfully',
      }
    } else {
      return {
        success: false,
        data: null,
        error: response.error || 'Failed to update group',
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
 * Delete group
 */
export const deleteGroup = async (id) => {
  try {
    const response = await apiRequest(`/groups/${id}/`, {
      method: 'DELETE',
    })

    if (response.success) {
      return {
        success: true,
        message: 'Group deleted successfully',
      }
    } else {
      return {
        success: false,
        error: response.error || 'Failed to delete group',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}

/**
 * Add student to group
 */
export const addStudentToGroup = async (groupId, studentId) => {
  try {
    const response = await apiRequest(`/groups/${groupId}/add-student/`, {
      method: 'POST',
      body: JSON.stringify({ student_id: studentId }),
    })

    if (response.success) {
      return {
        success: true,
        message: 'Student added to group successfully',
      }
    } else {
      return {
        success: false,
        error: response.error || 'Failed to add student to group',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}

/**
 * Remove student from group
 */
export const removeStudentFromGroup = async (groupId, studentId) => {
  try {
    const response = await apiRequest(`/groups/${groupId}/remove-student/`, {
      method: 'POST',
      body: JSON.stringify({ student_id: studentId }),
    })

    if (response.success) {
      return {
        success: true,
        message: 'Student removed from group successfully',
      }
    } else {
      return {
        success: false,
        error: response.error || 'Failed to remove student from group',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}

/**
 * Get group members
 */
export const getGroupMembers = async (groupId) => {
  try {
    const response = await apiRequest(`/groups/${groupId}/members/`)

    if (response.success) {
      return {
        success: true,
        data: Array.isArray(response.data)
          ? response.data
          : response.data.results || [],
        message: 'Group members fetched successfully',
      }
    } else {
      return {
        success: false,
        data: [],
        error: response.error || 'Failed to load group members',
      }
    }
  } catch (error) {
    return {
      success: false,
      data: [],
      error: error.message,
    }
  }
}

export default {
  // Teachers
  fetchTeachers,
  fetchTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,

  // Students
  fetchStudents,
  fetchStudentById,
  createStudent,
  updateStudent,
  deleteStudent,

  // Groups
  fetchGroups,
  fetchGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
  addStudentToGroup,
  removeStudentFromGroup,
  getGroupMembers,

  // Courses
  fetchCourses,
  fetchCourseById,
  fetchCoursesByInstructor,
  enrollCourse,
  getCourseWithInstructor,

  // Auth
  login,
  logout,
  setAuthToken,
  getAuthToken,
}
