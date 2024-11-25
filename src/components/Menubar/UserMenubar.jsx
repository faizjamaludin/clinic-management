import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const UserMenubar = ({ menus, trigger }) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{trigger}</MenubarTrigger>
        <MenubarContent>
          {menus.map((item, index) =>
            item.type === "separator" ? (
              <MenubarSeparator key={index} />
            ) : (
              <MenubarItem key={index} onClick={item.action}>
                {item.label}{" "}
                {item.shortcut && (
                  <MenubarShortcut>{item.shortcut}</MenubarShortcut>
                )}
              </MenubarItem>
            )
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
