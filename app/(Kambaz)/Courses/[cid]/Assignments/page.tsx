"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import * as db from "../../../Database";

type Assignment = {
  _id: string;
  title: string;
  course: string;
};

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = db.assignments as Assignment[];

  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">40% of Total</span>
              <FaPlus className="me-2" />
              <IoEllipsisVertical />
            </div>
          </div>
          <ListGroup className="wd-assignments rounded-0">
            {assignments.filter((a) => a.course === cid).length === 0 && (
              <ListGroupItem className="p-3 text-muted">No assignments yet.</ListGroupItem>
            )}
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1">
                  <div className="d-flex align-items-start">
                    <BsGripVertical className="me-2 fs-3" />
                    <div className="flex-grow-1">
                      <Link
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link"
                      >
                        {assignment.title}
                      </Link>
                    </div>
                    <AssignmentControlButtons />
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
