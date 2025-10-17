"use client"
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import { FaUserCircle } from "react-icons/fa";

type Enrollment = { _id: string; user: string; course: string };

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const enrollments = db.users as unknown as Enrollment[];
  const courseEnrollments = enrollments.filter((e) => e.course === cid);

  return (
    <div id="wd-people-table" className="container-fluid p-3">
      <h3 className="mb-3">People ({courseEnrollments.length})</h3>
      {courseEnrollments.length === 0 ? (
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
              {courseEnrollments.map((enr) => (
                <tr key={enr._id}>
                  <td>
                    <FaUserCircle className="me-2 fs-3 text-secondary" />
                  </td>
                  <td className="text-nowrap">{enr.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}