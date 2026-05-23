/**
 * Example: How to use the typed API hooks and services
 */

import React from "react"
import { useTeachers, useCreateTeacher } from "../features/teachers/hooks"
import { useStudents, useCreateStudent } from "../features/students/hooks"
import { useGroups, useGroupMembers } from "../features/groups/hooks"

/**
 * Example 1: Fetch all teachers with filters
 */
export const TeachersExample: React.FC = () => {
  const {
    data: teachers,
    loading,
    error,
    refetch,
  } = useTeachers({
    search: "John",
    specialization: "English",
  })

  if (loading) return <div>Loading teachers...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Teachers</h2>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.first_name} {teacher.last_name} - {teacher.specialization}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Example 2: Create a new teacher
 */
export const CreateTeacherExample: React.FC = () => {
  const { mutate, loading, error, success } = useCreateTeacher()

  const handleCreate = async () => {
    const result = await mutate({
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      phone: "+998901234567",
      specialization: "English",
      password: "secure_password",
    })

    if (result) {
      console.log("Teacher created:", result)
    }
  }

  return (
    <div>
      <h2>Create Teacher</h2>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {success && (
        <div style={{ color: "green" }}>Teacher created successfully!</div>
      )}
      <button onClick={handleCreate} disabled={loading}>
        {loading ? "Creating..." : "Create Teacher"}
      </button>
    </div>
  )
}

/**
 * Example 3: Fetch students with filters
 */
export const StudentsExample: React.FC = () => {
  const {
    data: students,
    loading,
    error,
    refetch,
  } = useStudents({
    status: "active",
    group_id: 1,
  })

  if (loading) return <div>Loading students...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Students</h2>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.first_name} {student.last_name} ({student.status})
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Example 4: Fetch groups and their members
 */
export const GroupsExample: React.FC = () => {
  const {
    data: groups,
    loading: groupsLoading,
    error: groupsError,
  } = useGroups()

  return (
    <div>
      <h2>Groups</h2>
      {groupsLoading && <div>Loading groups...</div>}
      {groupsError && <div>Error: {groupsError}</div>}

      {groups.map((group) => (
        <GroupCard key={group.id} groupId={group.id} groupName={group.name} />
      ))}
    </div>
  )
}

/**
 * Group card showing group details and members
 */
const GroupCard: React.FC<{ groupId: number; groupName: string }> = ({
  groupId,
  groupName,
}) => {
  const { data: members, loading, error } = useGroupMembers(groupId)

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3>{groupName}</h3>
      {loading && <p>Loading members...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <p>Members ({members.length}):</p>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.first_name} {member.last_name}
          </li>
        ))}
      </ul>
    </div>
  )
}
