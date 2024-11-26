import { InputText, TableData } from "@/components";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  MdOutlineShoppingBag,
  MdFilterList,
  MdOutlineAdd,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { peripheralsColumn } from "@/components/Table/columns/peripheralsColumns";
import { peripheralsData } from "@/components/Table/data/peripheralsData";

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
          <Button asChild>
            <Link to="add-new-peripherals">
              <MdOutlineAdd />
              Add Peripherals
            </Link>
          </Button>
        </div>
      </div>
      {/* table product */}
      <TableData columns={peripheralsColumn} data={peripheralsData} />
    </div>
  );
}
