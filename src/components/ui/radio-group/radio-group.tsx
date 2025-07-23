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
      className={cn("grid gap-8", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  children,
  forceMount,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  Pick<
    React.ComponentProps<typeof RadioGroupPrimitive.Indicator>,
    "forceMount"
  >) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex cursor-pointer items-center gap-12 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <div>
        <div
          className={cn(
            "border-dark-grey flex size-[22px] items-center justify-center rounded-full border-[1px] bg-white",
            forceMount && "border-primary-blue",
          )}
        >
          <RadioGroupPrimitive.Indicator
            data-slot="radio-group-indicator"
            className="relative flex items-center justify-center"
            forceMount={forceMount}
          >
            <CircleIcon className="fill-primary fill-primary-blue stroke-primary-blue absolute top-1/2 left-1/2 size-[15px] -translate-x-1/2 -translate-y-1/2" />
          </RadioGroupPrimitive.Indicator>
        </div>
      </div>

      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
