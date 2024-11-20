import { UserCard } from "@/components";

export const menuConfig = [
  {
    trigger: <UserCard />,
    items: [
      {
        label: "New Tab",
        shortcut: "⌘T",
        action: () => console.log("New Tab"),
      },
      { label: "New Window", action: () => console.log("New Window") },
      { type: "separator" },
      { label: "Share", action: () => console.log("Share") },
      { type: "separator" },
      { label: "Print", action: () => console.log("Print") },
    ],
  },
];
