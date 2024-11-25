import { InputText } from "@/components";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  MdOutlineShoppingBag,
  MdFilterList,
  MdOutlineAdd,
} from "react-icons/md";

export default function TableProduct() {
  return (
    <div className="py-xl flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-sm">
          <span className="rounded-xs p-sm bg-bg-secondary">
            <MdOutlineShoppingBag color="#666666" />
          </span>
          <p className="text-sm font-medium text-text-primary">32 Products</p>
        </div>
        <div className="flex flex-row items-center gap-x-md">
          <InputText placeholder="Search" />
          <Button variant="secondary">
            <MdFilterList />
            Filters
          </Button>
          <Button>
            <MdOutlineAdd />
            Add Peripherals
          </Button>
        </div>
      </div>
      {/* table product */}
    </div>
  );
}
