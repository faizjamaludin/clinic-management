import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const InputText = (props) => {
  return (
    <div className="flex flex-col gap-y-2xs w-full">
      <p className="font-medium text-sm">{props.label}</p>
      <Input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export const InputMeasurement = (props) => {
  return (
    <div className="flex flex-col gap-y-2xs w-full">
      <p className="font-medium text-sm">{props.label}</p>
      <div className="bg-bg-secondary flex flex-row items-center rounded-lg border border-border-primary">
        <Input
          type={props.type}
          placeholder={props.placeholder}
          className="border-0"
        />
        <p className="text-sm font-normal text-text-primary px-lg">
          {props.measurement}
        </p>
      </div>
    </div>
  );
};

export const InputTextArea = (props) => {
  return (
    <div className="flex flex-col gap-y-2xs w-full">
      <p className="font-medium text-sm">{props.label}</p>
      <Textarea placeholder={props.placeholder} />
    </div>
  );
};
