# Lingua Pro API Feature Structure

Complete TypeScript API integration with typed hooks, constants, and services.

## 📁 Directory Structure

```
src/
├── features/
│   ├── teachers/
│   │   └── hooks.ts          # Teacher hooks (fetch, create, update, delete)
│   ├── students/
│   │   └── hooks.ts          # Student hooks
│   ├── groups/
│   │   └── hooks.ts          # Group hooks
│   ├── examples.tsx          # Usage examples
│   └── index.ts              # Central exports
├── types/
│   └── index.ts              # All TypeScript types and interfaces
├── constants/
│   └── api.ts                # API endpoints and configuration
├── services/
│   └── api.service.ts        # Typed API request helpers
```

## 🎯 Key Features

✅ **Fully Typed** - Complete TypeScript support with proper types
✅ **Custom Hooks** - React hooks for fetching and mutations
✅ **Error Handling** - Comprehensive error management
✅ **Loading States** - Built-in loading indicators
✅ **Auto-fetch** - Hooks automatically fetch data on mount
✅ **Refetch** - Manual refetch capability
✅ **Constants** - Centralized API endpoints

## 🚀 Quick Start

### 1. Fetch Teachers

```typescript
import { useTeachers } from "@/features"

export const MyComponent = () => {
  const { data: teachers, loading, error, refetch } = useTeachers({
    specialization: "English",
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      {teachers.map((teacher) => (
        <div key={teacher.id}>{teacher.first_name}</div>
      ))}
    </div>
  )
}
```

### 2. Create a Teacher

```typescript
import { useCreateTeacher } from "@/features"

export const CreateTeacher = () => {
  const { mutate, loading, error, success } = useCreateTeacher()

  const handleSubmit = async (formData) => {
    const newTeacher = await mutate({
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      specialization: "English",
      password: "secure_password",
    })

    if (newTeacher) {
      console.log("Created:", newTeacher)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Success!</p>}
      {/* Form fields */}
      <button disabled={loading}>{loading ? "Creating..." : "Create"}</button>
    </form>
  )
}
```

### 3. Fetch Students

```typescript
import { useStudents } from "@/features"

const { data: students } = useStudents({
  status: "active",
  group_id: 1,
})
```

### 4. Fetch Groups and Members

```typescript
import { useGroups, useGroupMembers } from "@/features"

export const GroupList = () => {
  const { data: groups } = useGroups()

  return (
    <div>
      {groups.map((group) => (
        <GroupDetail key={group.id} groupId={group.id} />
      ))}
    </div>
  )
}

const GroupDetail = ({ groupId }) => {
  const { data: members } = useGroupMembers(groupId)

  return (
    <div>
      Members: {members.map((m) => m.first_name).join(", ")}
    </div>
  )
}
```

### 5. Add/Remove Student to/from Group

```typescript
import { useAddStudentToGroup, useRemoveStudentFromGroup } from "@/features"

export const ManageGroupMembers = ({ groupId }) => {
  const { mutate: addStudent } = useAddStudentToGroup(groupId)
  const { mutate: removeStudent } = useRemoveStudentFromGroup(groupId)

  return (
    <div>
      <button onClick={() => addStudent(123)}>Add Student 123</button>
      <button onClick={() => removeStudent(123)}>Remove Student 123</button>
    </div>
  )
}
```

## 📝 Available Types

```typescript
import type {
  Teacher,
  Student,
  Group,
  GroupMember,
  TeacherFilters,
  StudentFilters,
  GroupFilters,
  CreateTeacherPayload,
  CreateStudentPayload,
  CreateGroupPayload,
  ApiResponse,
  UseListResponse,
  UseItemResponse,
} from "@/features"
```

## 🔌 API Endpoints

```typescript
import {
  TEACHER_ENDPOINTS,
  STUDENT_ENDPOINTS,
  GROUP_ENDPOINTS,
} from "@/features"

TEACHER_ENDPOINTS.LIST // /teachers/
TEACHER_ENDPOINTS.DETAIL(id) // /teachers/{id}/
TEACHER_ENDPOINTS.CREATE // /teachers/
TEACHER_ENDPOINTS.UPDATE(id) // /teachers/{id}/
TEACHER_ENDPOINTS.DELETE(id) // /teachers/{id}/

STUDENT_ENDPOINTS.LIST // /students/
STUDENT_ENDPOINTS.DETAIL(id) // /students/{id}/
// ... etc

GROUP_ENDPOINTS.LIST // /groups/
GROUP_ENDPOINTS.MEMBERS(id) // /groups/{id}/members/
GROUP_ENDPOINTS.ADD_MEMBER(id) // /groups/{id}/add-student/
GROUP_ENDPOINTS.REMOVE_MEMBER(id) // /groups/{id}/remove-student/
// ... etc
```

## 🛠️ Advanced Usage

### Manual API Calls

```typescript
import {
  apiGet,
  apiPost,
  apiPatch,
  apiDelete,
  TEACHER_ENDPOINTS,
} from "@/features"

// Get all teachers
const response = await apiGet<Teacher[]>(TEACHER_ENDPOINTS.LIST)

// Create teacher
const response = await apiPost<Teacher>(TEACHER_ENDPOINTS.CREATE, {
  first_name: "John",
  // ...
})

// Update teacher
const response = await apiPatch<Teacher>(TEACHER_ENDPOINTS.UPDATE(1), {
  first_name: "Jane",
})

// Delete teacher
const response = await apiDelete(TEACHER_ENDPOINTS.DELETE(1))
```

### Query String Builder

```typescript
import { buildQueryString } from "@/features"

const query = buildQueryString({
  status: "active",
  group_id: 5,
  search: "John",
})
// Result: "?status=active&group_id=5&search=John"
```

## 📌 Hook Response Format

### List Hooks

```typescript
{
  data: T[],           // Array of items
  loading: boolean,    // Loading state
  error: string | null,// Error message
  refetch: () => Promise<void> // Manual refetch
}
```

### Item Hooks

```typescript
{
  data: T | null,      // Single item or null
  loading: boolean,
  error: string | null,
  refetch: () => Promise<void>
}
```

### Mutation Hooks

```typescript
{
  mutate: (payload) => Promise<T | null>, // Mutation function
  loading: boolean,
  error: string | null,
  success: boolean
}
```

## 🔐 Authentication

Tokens are automatically managed:

- Stored in localStorage on login
- Sent with every request as Bearer token
- Cleared on 401 unauthorized errors

```typescript
import { clearAuthToken } from "@/features"

// Manual logout
clearAuthToken()
```

## 📚 Examples

See `src/features/examples.tsx` for complete working examples.

## ⚙️ Configuration

Edit `src/constants/api.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: "http://your-api-url/api",
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
}
```
