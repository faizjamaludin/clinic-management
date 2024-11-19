import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import { Button } from "./components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InputMeasurement, InputText, InputTextArea } from "./components";
import { MdDiscount, MdOutlineDoorBack } from "react-icons/md";

export default function App() {
  return (
    <DashboardLayout className="flex flex-col items-center">
      <div className="flex flex-col gap-y-[30px] w-9/12">
        {/* row 1 */}
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold text-lg text-text-primary">
            New Peripherals
          </h1>
          {/* buttons */}
          <div className="flex flex-row gap-4">
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col gap-y-2xl">
            <div className="w-[150px] h-[150px] border rounded-md"></div>
            <h1 className="font-semibold text-lg text-text-primary">
              Assign to
            </h1>
            <div className="flex flex-row items-center gap-x-md">
              <div className="border p-md rounded-full bg-bg-secondary">
                <MdOutlineDoorBack color="#9ca3af" />
              </div>
              <p className="text-text-caption text-sm font-normal">
                Select assign
              </p>
            </div>
            <h1 className="font-semibold text-lg text-text-primary">Tags</h1>
            <div className="flex flex-row items-center gap-x-md">
              <div className="border p-md rounded-full bg-bg-secondary">
                <MdDiscount color="#9ca3af" />
              </div>
              <p className="text-text-caption text-sm font-normal">Add tags</p>
            </div>
          </div>
          <div className="flex flex-col border border-primary rounded-sm p-2xl gap-y-2xl">
            <h1 className="font-semibold text-lg text-text-primary">
              Product Details
            </h1>
            <div className="grid grid-cols-2 w-full gap-x-2xl gap-y-lg">
              <InputText
                type="text"
                label="Product Name"
                placeholder="ex : chair"
              />
              <InputText
                type="text"
                label="Series"
                placeholder="ex : HG321003"
              />
              <InputText
                type="text"
                label="Category"
                placeholder="Insert product category"
              />
              <InputMeasurement
                type="text"
                label="Weight"
                placeholder="100"
                measurement="Kg"
              />
              <InputText type="text" label="SKU" placeholder="ex : E212L5KMN" />
              <InputText
                type="text"
                label="barcode"
                placeholder="ex : IZ3912972346072346"
              />
              <InputTextArea
                label="Description"
                placeholder="Insert placeholder"
              />
            </div>

            <Separator className="bg-border-primary" />

            <h1 className="font-semibold text-lg text-text-primary">
              Purchase Details
            </h1>
            <div className="grid grid-cols-2 w-full gap-x-2xl gap-y-lg">
              <InputText type="date" label="Purchase Date" placeholder="" />
              <InputText
                type="text"
                label="Purchase Price (RM)"
                placeholder="Insert purchase price"
              />
              <InputText
                type="text"
                label="Vendor"
                placeholder="Insert vendor"
              />
              <InputText
                type="text"
                label="Invoice Number"
                placeholder="Insert invoice number"
              />
            </div>

            <Separator className="bg-border-primary" />

            <h1 className="font-semibold text-lg text-text-primary">
              Attachment
            </h1>
            <p className="text-text-caption text-sm font-normal">
              Upload product photos, invoices, documents, etc. Image format
              .jpg, .jpeg, .png and minimum size 300 x 300px
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
