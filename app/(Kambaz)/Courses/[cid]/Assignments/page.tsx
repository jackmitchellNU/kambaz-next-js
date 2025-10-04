import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" /> 
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">40% of Total</span>
              <FaPlus className="me-2" />
              <IoEllipsisVertical />
            </div>
          </div>
          <ListGroup className="wd-assignments rounded-0">
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/A1" className="wd-assignment-link">
                    A1 - ENV + HTML
                  </Link>
                  <br />
                  <span className="small">
                    Available from: 2026-05-15 - 2026-06-2 | Due: 2026-06-1
                  </span>
                </div>
                <AssignmentControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/A2" className="wd-assignment-link">
                    A2 - Vercel and github
                  </Link>
                  <br />
                  <span className="small">
                    Available from: 2026-06-1 - 2026-06-16 | Due: 2026-06-15
                  </span>
                </div>
                <AssignmentControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
