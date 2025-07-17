"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-5 [&>div]:flex-col", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex cursor-pointer items-center gap-12 outline-none disabled:cursor-not-allowed disabled:opacity-50",

        "border-grey hover:bg-radio-background-hovered flex rounded-lg border-[1px] p-6",

        "has-data-[state=checked]:bg-tertiary-blue has-data-[state=checked]:border-radio-border-active has-data-[state=checked]:[&>div]:border-radio-border-active has-data-[state=checked]:[&_path]:fill-primary-blue has-data-[state=checked]:[&_span]:text-primary-blue",
        className,
      )}
      {...props}
    >
      <div className="border-grey flex size-[22px] items-center justify-center rounded-full border-[1px] bg-white">
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="relative flex items-center justify-center"
        >
          <CircleIcon className="fill-primary fill-primary-blue absolute top-1/2 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2" />
        </RadioGroupPrimitive.Indicator>
      </div>

      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
