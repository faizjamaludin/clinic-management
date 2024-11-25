import React from "react";
import { UserMenubar, User } from "..";
import { menuConfig } from "@/config/menuConfig";

export const UserCard = () => {
  return (
    <div className="w-full">
      <UserMenubar menus={menuConfig} trigger={<User />} />
    </div>
  );
};
