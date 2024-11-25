import { Sidebar, Topbar } from "@/components";
import React from "react";

const DashboardLayout = ({ children, className }) => {
  return (
    <div className="grid grid-cols-[240px,_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <div className="p-xl flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
