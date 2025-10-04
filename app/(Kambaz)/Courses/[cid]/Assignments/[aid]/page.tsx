import {
  FormControl,
  FormSelect,
  FormCheck,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { aid } = await params;
  return (
    <div id="wd-assignments-editor" className="container-fluid p-4">
      <Form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <FormControl id="wd-name" defaultValue={aid} className="mb-3" />
        </div>

        <div className="mb-3">
          <FormControl
            as="textarea"
            id="wd-description"
            defaultValue="The assignment is available online"
            className="mb-3"
          />
        </div>

        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
          </Col>
          <Col md={10}>
            <FormControl id="wd-points" defaultValue="100" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="wd-assignment-group" className="form-label">
              Assignment Group
            </label>
          </Col>
          <Col md={10}>
            <FormSelect id="wd-assignment-group" defaultValue="Assignments">
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Project">Project</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="wd-display-grade" className="form-label">
              Display Grade as
            </label>
          </Col>
          <Col md={10}>
            <FormSelect id="wd-display-grade" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </Col>
          <Col md={10}>
            <FormSelect id="wd-submission-type" defaultValue="Online">
              <option value="Online">Online</option>
              <option value="Paper">Paper</option>
              <option value="External Tool">External Tool</option>
            </FormSelect>

            <div className="mt-3 border p-3">
              <h6>Online Entry Options</h6>
              <FormCheck
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                defaultChecked
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}>
            <label className="form-label">Assign</label>
          </Col>
          <Col md={10}>
            <div className="border p-3">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label">
                  Assign to
                </label>
                <FormControl id="wd-assign-to" defaultValue="Everyone" />
              </div>

              <Row className="mb-3">
                <Col md={4}>
                  <label htmlFor="wd-due-date" className="form-label">
                    Due
                  </label>
                  <FormControl
                    id="wd-due-date"
                    type="datetime-local"
                    defaultValue="2024-05-13T23:59"
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="wd-available-from" className="form-label">
                    Available from
                  </label>
                  <FormControl
                    id="wd-available-from"
                    type="datetime-local"
                    defaultValue="2024-05-06T12:00"
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <FormControl id="wd-available-until" type="datetime-local" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
