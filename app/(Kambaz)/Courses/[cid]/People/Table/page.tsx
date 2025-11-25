"use client"
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";


type Enrollment = { _id: string; user: string; course: string };

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {
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
                  <td className="text-nowrap">{user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}