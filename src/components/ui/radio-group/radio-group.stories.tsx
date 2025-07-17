import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "../label";
import { LegalEntityIcon } from "@/features/account-creation/components/icons/legal-entity";
import { NaturalPersonIcon } from "@/features/account-creation/components/icons/natural-person";

const data = [
  {
    value: "Association",
    title: "Association",
    description: "Personne morale",
  },
  { value: "Entreprise", title: "Entreprise", description: "Personne morale" },
  {
    value: "Micro entreprise",
    title: "Micro entreprise",
    description: "Personne morale",
  },
];

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex gap-5">
        {data.map((item) => (
          <RadioGroupItem
            key={item.value}
            value={item.value}
            id={item.value}
            className="flex-1 gap-12"
          >
            <div className="flex gap-6">
              <NaturalPersonIcon className="fill-dark-grey" />
              <Label
                htmlFor={item.value}
                className="flex cursor-pointer flex-col items-start"
              >
                <span className="font-semibold text-black">{item.title}</span>
                <span className="text-black">{item.description}</span>
              </Label>
            </div>
          </RadioGroupItem>
        ))}
      </div>
    ),
  },
};

export const LegalEntity: Story = {
  args: {
    children: (
      <div className="flex gap-5">
        {data.map((item) => (
          <RadioGroupItem
            key={item.value}
            value={item.value}
            id={item.value}
            className="flex-1 flex-col gap-6"
          >
            <div className="flex flex-col items-center gap-3">
              <LegalEntityIcon className="fill-dark-grey" />
              <Label
                htmlFor={item.value}
                className="flex cursor-pointer flex-col items-center"
              >
                <span className="font-semibold text-black">{item.title}</span>
                <span className="text-black">{item.description}</span>
              </Label>
            </div>
          </RadioGroupItem>
        ))}
      </div>
    ),
    className: "[&>div]:flex-row",
  },
};
