import { ReactNode } from "react";
import KambazNavigation from "./Navigation/page";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex">
      <div>
        <td valign="top" width="200">
          {" "}
          <KambazNavigation />{" "}
        </td>
      </div>
      <div className="flex-fill">
        <td valign="top" width="100%">
          {" "}
          {children}{" "}
        </td>
      </div>
    </div>
  );
}
