import React, { useState } from "react";
import FormControl from "react-bootstrap/esm/FormControl";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "m1",
    name: "Intro to Node Servers",
    description: "A short module about building Node.js servers with Express.",
    course: "Web Development",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <div className="mt-3">
        <label className="form-label">Score</label>
        <FormControl id="wd-assignment-score" type="number" className="w-50"
          defaultValue={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value || "0") })} />
        <a id="wd-update-assignment-score" className="btn btn-secondary mt-2 me-2"
           href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>Update Score</a>

        <div className="form-check mt-2">
          <input id="wd-assignment-completed" className="form-check-input" type="checkbox"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
          <label className="form-check-label">Completed</label>
        </div>
        <a id="wd-update-assignment-completed" className="btn btn-secondary mt-2"
           href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>Update Completed</a>
      </div>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
            <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
              <h4 className="mt-4">Module (server-backed)</h4>
              <a id="wd-retrieve-module" className="btn btn-primary"
                 href={`${HTTP_SERVER}/lab5/module`}>Get Module</a>
              <a id="wd-retrieve-module-name" className="btn btn-primary ms-2"
                 href={`${HTTP_SERVER}/lab5/module/name`}>Get Module Name</a>
              <div className="mt-3">
                <label className="form-label">Module Name</label>
                <FormControl id="wd-module-name" defaultValue={module.name}
                  onChange={(e) => setModule({ ...module, name: e.target.value })} />
                <a id="wd-update-module-name" className="btn btn-secondary mt-2 me-2"
                   href={`${HTTP_SERVER}/lab5/module/name/${module.name}`}>Update Module Name</a>

                <label className="form-label mt-3">Module Description</label>
                <FormControl id="wd-module-description" defaultValue={module.description}
                  onChange={(e) => setModule({ ...module, description: e.target.value })} />
                <a id="wd-update-module-description" className="btn btn-secondary mt-2"
                   href={`${HTTP_SERVER}/lab5/module/description/${module.description}`}>Update Module Description</a>
              </div>
    </div>
);}
