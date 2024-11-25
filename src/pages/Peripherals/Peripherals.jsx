import React from "react";
import { DashboardLayout } from "@/layouts";
import Statistics from "./Statistics";
import TableProduct from "./TableProduct";
import { Separator } from "@/components/ui/separator";

export default function Peripherals() {
  return (
    <DashboardLayout>
      <>
        <Statistics />
        <Separator />
        <TableProduct />
      </>
    </DashboardLayout>
  );
}
