import React from "react";
import {
  MdOutlineImage,
  MdOutlineDiscount,
  MdOutlineDoorBack,
} from "react-icons/md";

export default function ProductPhoto() {
  return (
    <div className="flex flex-col gap-y-2xl">
      <div className="h-[150px] w-[150px] border border-border-primary rounded-lg flex justify-center items-center flex flex-col gap-y-md shadow-md">
        <MdOutlineImage size={30} color="#666666" />
        <p className="text-xs text-button-primary">Upload Photo</p>
      </div>

      {/* assign to */}
      <div className="flex gap-y-sm flex-col">
        <p className="text-sm font-medium">Assign to</p>
        <div className="flex flex-row items-center gap-x-sm">
          <span className="p-sm rounded-full border border-border-primary">
            <MdOutlineDoorBack size={17} color="#666666" />
          </span>
          <p className="text-text-caption text-sm">Select assign</p>
        </div>
      </div>

      {/* tags */}
      <div className="flex gap-y-sm flex-col">
        <p className="text-sm font-medium">Tags</p>
        <div className="flex flex-row items-center gap-x-sm">
          <span className="p-sm rounded-full border border-border-primary">
            <MdOutlineDiscount size={17} color="#666666" />
          </span>
          <p className="text-text-caption text-sm">Add tags</p>
        </div>
      </div>

      {/* status */}
      <div className="flex gap-y-sm flex-col">
        <p className="text-sm font-medium">Status</p>
        <div className="flex flex-row items-center gap-x-sm">
          <span className="p-sm rounded-full border border-border-primary">
            <MdOutlineDiscount size={17} color="#666666" />
          </span>
          <p className="text-text-caption text-sm">Add tags</p>
        </div>
      </div>
    </div>
  );
}
