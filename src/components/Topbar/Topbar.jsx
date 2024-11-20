import React from "react";
import { User } from "..";

export default function Topbar() {
  return (
    <div className="h-[60px] bg-bg-primary border-b border-border-primary items-center sticky top-0 flex flex-row items-center px-10 justify-between">
      <h1 className="font-semibold">Dashboard</h1>
      <div>{/* <User /> */}</div>
    </div>
  );
}
