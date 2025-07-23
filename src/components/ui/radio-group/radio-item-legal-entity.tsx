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

const labelVariants = cva("flex cursor-pointer flex-col text-md", {
  variants: {
    variant: {
      default: "items-start",
      vertical: "items-center",
    },
    state: {
      unchecked: "text-black",
      checked: "text-primary-blue",
    },
  },
  defaultVariants: {
    variant: "default",
    state: "unchecked",
  },
});
const RadioGroupItemVariants = cva(
  "flex-1 min-w-60 flex rounded-lg border-[1px] p-6",
  {
    variants: {
      variant: {
        default: "gap-12",
        vertical: "flex-col gap-6 p-[23px]",
      },
      state: {
        unchecked: "border-grey hover:bg-radio-background-hovered",
        checked: "bg-tertiary-blue border-radio-border-active",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "unchecked",
    },
  },
);

const descriptionVariants = cva("leading-[20px]", {
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

const iconVariants = cva("", {
  variants: {
    state: {
      unchecked: "fill-dark-grey",
      checked: "fill-primary-blue",
    },
  },
  defaultVariants: {
    state: "unchecked",
  },
});

type RadioItemLegalEntityProps = {
  title: string;
  description: string;
  value: string;
  state: "checked" | "unchecked";
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & VariantProps<typeof contentVariants | typeof labelVariants>;

export const RadioItemLegalEntity = ({
  title,
  description,
  value,
  Icon,
  variant,
  state,
}: RadioItemLegalEntityProps) => {
  return (
    <RadioGroupItem
      value={value}
      id={value}
      className={cn(RadioGroupItemVariants({ variant, state }))}
      forceMount={state === "checked" ? true : undefined}
    >
      <div className={cn(contentVariants({ variant }))}>
        <div>
          <Icon className={cn(iconVariants({ state }))} />
        </div>
        <Label
          htmlFor={value}
          className={cn(labelVariants({ variant, state }))}
        >
          <span className="leading-[20px] font-semibold">{title}</span>
          <span className={cn(descriptionVariants({ variant }))}>
            {description}
          </span>
        </Label>
      </div>
    </RadioGroupItem>
  );
};
