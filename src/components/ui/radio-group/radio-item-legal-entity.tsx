import { cva, type VariantProps } from "class-variance-authority";
import { Label } from "../label";
import { cn } from "@/lib/utils";
import { RadioGroupItem } from "./radio-group";

const contentVariants = cva("flex items-center", {
  variants: {
    variant: {
      default: "gap-6 py-px",
      vertical: "flex-col gap-[15px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const labelVariants = cva("flex cursor-pointer flex-col leading-[20px]", {
  variants: {
    variant: {
      default: "items-start",
      vertical: "items-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const RadioGroupItemVariants = cva("flex-1 min-w-60", {
  variants: {
    variant: {
      default: "gap-12",
      vertical: "flex-col gap-6 p-[23px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const descriptionVariants = cva("text-black", {
  variants: {
    variant: {
      default: "text-left",
      vertical: "text-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type RadioItemLegalEntityProps = {
  title: string;
  description: string;
  value: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & VariantProps<typeof contentVariants | typeof labelVariants>;

export const RadioItemLegalEntity = ({
  title,
  description,
  value,
  Icon,
  variant,
}: RadioItemLegalEntityProps) => {
  return (
    <RadioGroupItem
      value={value}
      id={value}
      className={cn(RadioGroupItemVariants({ variant }))}
    >
      <div className={cn(contentVariants({ variant }))}>
        <div>
          <Icon className="fill-dark-grey" />
        </div>
        <Label htmlFor={value} className={cn(labelVariants({ variant }))}>
          <span className="font-semibold text-black">{title}</span>
          <span className={cn(descriptionVariants({ variant }))}>
            {description}
          </span>
        </Label>
      </div>
    </RadioGroupItem>
  );
};
