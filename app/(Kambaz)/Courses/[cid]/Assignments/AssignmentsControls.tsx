import { Button, Form } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-assignment-group-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <div className="float-start me-3" style={{ maxWidth: "300px" }}>
        <div className="position-relative">
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <Form.Control 
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="ps-5"
          />
        </div>
      </div>
    </div>
  );
}
