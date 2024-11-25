import { Input } from "@/components/ui/input";

export const InputText = (props) => {
  return (
    <div className={`w-full  ${props.className}`}>
      <p className="font-normal text-text-primary text-sm">{props.label}</p>
      <Input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
