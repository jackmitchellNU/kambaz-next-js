import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
 return (
   <div id="wd-home">
       <div className="d-flex" id="wd-home">
    <div className="flex-fill me-3">
           <td valign="top" width="70%"> <Modules /> </td>
          </div>
          <div className="d-none d-lg-block">
           <td valign="top"> <CourseStatus /> </td>
              </div>
  </div>
   </div>
);}
