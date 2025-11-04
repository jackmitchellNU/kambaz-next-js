"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FormControl,
  FormSelect,
  FormCheck,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment } from "../../../Assignments/reducer";

interface Assignment {
  title: string;
  description: string;
  points: string;
  assignmentGroup: string;
  displayGrade: string;
  submissionType: string;
  assignTo: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();

  const isNew = aid === "new";

  const [assignment, setAssignment] = useState<Assignment>({
    title: isNew ? "" : aid,
    description: "The assignment is available online",
    points: "100",
    assignmentGroup: "Assignments",
    displayGrade: "Percentage",
    submissionType: "Online",
    assignTo: "Everyone",
    dueDate: "2024-05-13T23:59",
    availableFrom: "2024-05-06T12:00",
    availableUntil: "",
  });

  const handleSave = () => {
    dispatch(addAssignment({
      name: assignment.title,
      title: assignment.title,
      description: assignment.description,
      points: parseInt(assignment.points),
      course: cid,
      dueDate: assignment.dueDate,
      availableFrom: assignment.availableFrom,
      availableUntil: assignment.availableUntil,
    }));
  };

  const assignmentsUrl = `/Courses/${cid}/Assignments`;

  return (
    <div id="wd-assignments-editor" className="container-fluid p-4">
      <Form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <FormControl
            id="wd-name"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            className="mb-3"
          />
        </div>

        <div className="mb-3">
          <FormControl
            as="textarea"
            id="wd-description"
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
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
            <FormControl
              id="wd-points"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({ ...assignment, points: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="wd-assignment-group" className="form-label">
              Assignment Group
            </label>
          </Col>
          <Col md={10}>
            <FormSelect
              id="wd-assignment-group"
              value={assignment.assignmentGroup}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  assignmentGroup: e.target.value,
                })
              }
            >
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
            <FormSelect
              id="wd-display-grade"
              value={assignment.displayGrade}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  displayGrade: e.target.value,
                })
              }
            >
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
            <FormSelect
              id="wd-submission-type"
              value={assignment.submissionType}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  submissionType: e.target.value,
                })
              }
            >
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
                <FormControl
                  id="wd-assign-to"
                  value={assignment.assignTo}
                  onChange={(e) =>
                    setAssignment({ ...assignment, assignTo: e.target.value })
                  }
                />
              </div>

              <Row className="mb-3">
                <Col md={4}>
                  <label htmlFor="wd-due-date" className="form-label">
                    Due
                  </label>
                  <FormControl
                    id="wd-due-date"
                    type="datetime-local"
                    value={assignment.dueDate}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        dueDate: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="wd-available-from" className="form-label">
                    Available from
                  </label>
                  <FormControl
                    id="wd-available-from"
                    type="datetime-local"
                    value={assignment.availableFrom}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <FormControl
                    id="wd-available-until"
                    type="datetime-local"
                    value={assignment.availableUntil}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end">
          <Link href={assignmentsUrl}>
            <Button
              variant="secondary"
              className="me-2"
              id="wd-cancel"
            >
              Cancel
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={handleSave}
            id="wd-save-assignment"
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
