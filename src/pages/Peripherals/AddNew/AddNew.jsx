import React from "react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts";
import ProductPhoto from "./ProductPhoto";
import ProductForm from "./ProductForm";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AddNew() {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="w-10/12 place-self-center flex flex-col gap-y-2xl">
        <Button
          variant="secondary"
          className="w-fit place-items-center"
          onClick={() => navigate(-1)}
        >
          <MdArrowBackIos />
          Back
        </Button>
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold">New Peripherals</p>
          <div className="flex flex-row items-center gap-x-md">
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-2xl">
          <ProductPhoto />
          <ProductForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
