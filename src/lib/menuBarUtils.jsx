import { MdOutlineArrowDropDown } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const topBarConfig = [
  {
    trigger: (
      <div className="flex flex-row gap-x-2">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold">Ahmad Faiz Jamaludin</p>
          <p className="text-xs font-normal text-text-caption">Super Admin</p>
        </div>
        <MdOutlineArrowDropDown size={25} />
      </div>
    ),
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
