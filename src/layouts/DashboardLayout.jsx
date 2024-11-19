import React from "react";
import { Topbar } from "@/components";

const DashboardLayout = ({ children, className }) => {
  return (
    <div className="grid grid-cols-8 grid-rows-13 min-h-screen w-full">
      <div className="bg-slate-300 row-span-13">1</div>
      <div className="col-span-7 flex flex-row justify-between items-center px-6 border-b border-border-primary">
        <Topbar />
      </div>
      <div className={`row-span-12 col-span-7 p-4 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
