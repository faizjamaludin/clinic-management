import React from "react";
import { InputText } from "@/components/";
import { topBarConfig } from "@/lib/menuBarUtils";
import { CustomMenubar } from "@/components/CustomMenubar";
import { MdOutlineSettings } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function Topbar() {
  return (
    <>
      <h1 className="font-semibold text-lg">Dashboard</h1>
      <div className="flex flex-row items-center gap-x-2">
        <div className="flex flex-row w-[300px] items-center gap-x-2">
          <InputText placeholder="Search anything" />
          <Button size="icon" variant="icon" asChild>
            <MdOutlineSettings size={25} color="#9ca3af" />
          </Button>
        </div>
        <div></div>
        <div className="flex flex-row gap-2">
          <CustomMenubar menus={topBarConfig} />
        </div>
      </div>
    </>
  );
}
