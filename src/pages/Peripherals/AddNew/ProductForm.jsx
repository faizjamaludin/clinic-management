import React from "react";
import { InputText, InputTextArea } from "@/components";
import { Separator } from "@/components/ui/separator";
import { MdOutlineImage } from "react-icons/md";

export default function ProductForm() {
  return (
    <div className="flex flex-col border border-primary rounded-lg w-10/12 p-xl gap-y-2xl">
      <div className="flex flex-col gap-y-xl">
        <h1 className="font-semibold text-lg">Product Details</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-lg">
          <InputText placeholder="ex : chair" label="Product Name" />
          <InputText placeholder="ex : HG321003" label="Series" />
          <InputText placeholder="Insert product category" label="Category" />
          <InputText placeholder="0" label="Weight" />
          <InputText placeholder="ex : E212L5KMN" label="SKU" />
          <InputText placeholder="ex : IZ3912972346072346" label="Barcode" />
          <InputTextArea placeholder="Description" label="Description" />
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-y-xl">
        <h1 className="font-semibold text-lg">Purchase Details</h1>
        <div className="grid grid-cols-2 gap-lg">
          <InputText type="date" label="Purchase Date" />
          <InputText
            placeholder="Insert purchase price"
            label="Purchase Price (RM)"
          />
          <InputText placeholder="Insert vendor" label="Vendor" />
          <InputText
            placeholder="Insert invoice number"
            label="Invoice Number"
          />
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-y-xl">
        <h1 className="font-semibold text-lg">Attachment</h1>
        <p className="text-text-caption text-sm">
          Upload product photos, invoices, documents, etc. Image format .jpg,
          .jpeg, .png and minimum size 300 x 300px
        </p>
        <div className="w-[250px] h-[150px] border border-border-primary shadow-md rounded-lg flex flex-col justify-center items-center gap-y-md">
          <MdOutlineImage size={30} color="#666666" />
          <p className="text-xs text-button-primary">Add Attachment</p>
        </div>
      </div>
    </div>
  );
}
