import { Separator } from "@/components/ui/separator";
import React from "react";
import { MdOutlineMonetizationOn } from "react-icons/md";

export default function Statistics() {
  return (
    <div className="flex flex-row items-center py-xl">
      {/* value */}
      <div className="flex flex-row items-center gap-x-md py-2xl px-xl">
        <span className="bg-button-secondary rounded-full p-sm">
          <MdOutlineMonetizationOn color="#4f46e5" size={25} />
        </span>
        <div className="flex flex-col">
          <span className="text-xs text-text-caption font-medium">
            Total Aset Value
          </span>
          <span className="text-lg font-semibold">RM 10,200,323</span>
        </div>
      </div>
      <Separator orientation="vertical" />
      {/* total product */}
      <div className="flex flex-col py-2xl px-xl">
        <p className="text-lg font-semibold">
          32 <span className="font-normal text-sm">products</span>
        </p>
      </div>
    </div>
  );
}
