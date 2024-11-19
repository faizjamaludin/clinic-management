import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-text-primary font-normal focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-button-secondary file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-text-caption disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
