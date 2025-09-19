import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> </li>
          <span className="wd-assignment-availble-date">
            Availble from: 2026-05-15 - 2026-06-2
          </span>
          <br />
          <span className="wd-assignment-due-date">Due: 2026-06-1</span>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/124"
             className="wd-assignment-link" >
            A2 - Vercel and github
          </Link>
        </li>
         <span className="wd-assignment-availble-date">Availble from: 2026-06-1 - 2026-06-16</span>
        <br />
        <span className="wd-assignment-due-date">
          Due: 2026-06-15
        </span>
      </ul>
    </div>
);}
