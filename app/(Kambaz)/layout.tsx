import { ReactNode } from "react";
import KambazNavigation from "./Navigation/page";
import "./styles.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex">
      <div style={{ minWidth: 200, maxWidth: 250 }}>
        <KambazNavigation />
      </div>
      <div className="wd-main-content-offset p-3 flex-fill">
        {children}
      </div>
    </div>
  );
}
