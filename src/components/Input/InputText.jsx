import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const InputText = (props) => {
  return (
    <div className={`w-full flex flex-col gap-y-sm ${props.className}`}>
      <p className="font-medium text-text-primary text-sm">{props.label}</p>
      <Input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export const InputMeasurement = (props) => {
  return (
    <div className={`w-full flex flex-col gap-y-sm ${props.className}`}>
      <p className="font-medium text-text-primary text-sm">{props.label}</p>
      <div className="flex">
        <Input type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export const InputTextArea = (props) => {
  return (
    <div className={`w-full flex flex-col gap-y-sm ${props.className}`}>
      <p className="font-medium text-text-primary text-sm">{props.label}</p>
      <Textarea placeholder={props.placeholder} />
    </div>
  );
};
