import React from "react";
import { InputText, UserCard } from "..";
import { Button } from "../ui/button";
import { MdOutlineSettings } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="h-[60px] bg-bg-primary border-b border-border-primary items-center sticky top-0 flex flex-row items-center px-10 justify-between">
      <h1 className="font-semibold">Dashboard</h1>
      <div className="flex flex-row items-center gap-x-md ">
        <InputText placeholder="Search anything" className="w-[300px]" />
        <Button size="icon" variant="icon">
          <MdOutlineSettings variant="icon" color="#9ca3af" />
        </Button>
        <UserCard />
      </div>
    </div>
  );
}
