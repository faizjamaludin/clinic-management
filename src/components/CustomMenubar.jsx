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

export const CustomMenubar = ({ menus }) => {
  return (
    <Menubar>
      {menus.map((menu, menuIndex) => (
        <MenubarMenu key={menuIndex}>
          <MenubarTrigger>{menu.trigger}</MenubarTrigger>
          <MenubarContent>
            {menu.items.map((item, itemIndex) =>
              item.type === "separator" ? (
                <MenubarSeparator key={itemIndex} />
              ) : (
                <MenubarItem key={itemIndex} onClick={item.action}>
                  {item.label}{" "}
                  {item.shortcut && (
                    <MenubarShortcut>{item.shortcut}</MenubarShortcut>
                  )}
                </MenubarItem>
              )
            )}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};
