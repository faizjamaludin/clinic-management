import React from "react";
import {
  MdOutlineStoreMallDirectory,
  MdOutlineExitToApp,
} from "react-icons/md";
import { Menu } from "..";
import { menuSection } from "@/config/menuConfig";

export default function Sidebar() {
  return (
    <div className="bg-bg-secondary h-[100vh] px-lg py-2xl border-r border-border-primary flex flex-col gap-y-xl">
      {/* title */}
      <div className="flex flex-row items-center font-semibold relative">
        <span>Clinic Management System</span>
        <MdOutlineExitToApp
          className="absolute right-0"
          color="#666666"
          size={17}
        />
      </div>

      {/* store name */}
      <div className="flex flex-row items-center border border-border-primary p-sm rounded-sm cursor-pointer gap-x-sm">
        <MdOutlineStoreMallDirectory size={22} color="#666666" />

        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium">Uni Klinik</span>
          <span className="text-xs">Crystalville, Cyberjaya</span>
        </div>
      </div>

      {/* menu */}
      <div className="flex flex-col gap-y-sm">
        <Menu sections={menuSection} />
      </div>
    </div>
  );
}
