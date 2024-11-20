import React from "react";
import { UserMenubar } from "..";
import { menuConfig } from "@/config/menuConfig";

export default function User() {
  return (
    <div>
      <UserMenubar menus={menuConfig} />
    </div>
  );
}
