export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of" />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-date">Available From</label>
            </td>
            <td>
              <input id="wd-available-date" type="date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-type">Assignment Type</label>
            </td>
            <td>
              <select id="wd-assignment-type" defaultValue="Homework">
                <option value="Homework">Homework</option>
                <option value="Quiz">Quiz</option>
                <option value="Project">Project</option>
                <option value="Exam">Exam</option>
              </select>
            </td>
            <td>
                <button type="button">Save</button>
                <button type="button">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
);}
