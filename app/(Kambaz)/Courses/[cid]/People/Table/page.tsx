"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import * as client from "../../../client";

type User = { _id: string; firstName?: string; lastName?: string; username?: string };

export default function PeopleTable({ users: initialUsers = [], fetchUsers }: { users?: any[]; fetchUsers?: () => void; }) {
  const { cid } = useParams<{ cid: string }>();
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    if (cid && (!initialUsers || initialUsers.length === 0)) {
      const fetchEnrolledUsers = async () => {
        try {
          const enrolledUsers = await client.findUsersForCourse(cid as string);
          setUsers(enrolledUsers);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      };
      fetchEnrolledUsers();
    } else if (initialUsers && initialUsers.length > 0) {
      setUsers(initialUsers);
    }
  }, [cid, initialUsers]);

  const displayName = (user: User) => {
    if (user.firstName || user.lastName) {
      return `${user.firstName || ""} ${user.lastName || ""}`.trim();
    }
    return user.username || "Unknown User";
  };

  return (
    <div id="wd-people-table" className="container-fluid p-3">
      <h3 className="mb-3">People ({users.length})</h3>
      {users.length === 0 ? (
        <div className="text-muted">No people enrolled in this course.</div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 60 }}></th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <FaUserCircle className="me-2 fs-3 text-secondary" />
                  </td>
                  <td className="text-nowrap">{displayName(user)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}