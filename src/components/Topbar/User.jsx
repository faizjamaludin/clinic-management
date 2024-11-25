import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const User = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-x-lg">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-medium text-text-primary text-sm">Ahmad Faiz</p>
          <span className="text-text-caption text-xs">Super Admin</span>
        </div>

        <span>
          <MdOutlineArrowDropDown size={25} />
        </span>
      </div>
    </>
  );
};
