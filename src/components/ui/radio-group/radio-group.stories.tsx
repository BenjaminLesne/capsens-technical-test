import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioGroup } from "./radio-group";
import { NaturalPersonIcon } from "@/features/account-creation/components/icons/natural-person";
import { RadioItemLegalEntity } from "./radio-item-legal-entity";

const data = [
  {
    value: "Association",
    title: "Association",
    description: "Personne morale",
  },
  { value: "Entreprise", title: "Entreprise", description: "Personne morale" },
  {
    value: "Micro Entreprise",
    title: "Micro Entreprise",
    description: "Personne morale",
  },
];

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PhysicalPersonEntity: Story = {
  args: {
    children: (
      <div className="flex gap-5">
        {data.map((item) => (
          <RadioItemLegalEntity
            Icon={NaturalPersonIcon}
            description={item.description}
            title={item.title}
            value={item.value}
            key={item.value}
          />
        ))}
      </div>
    ),
  },
};

export const CompanyEntity: Story = {
  args: {
    children: (
      <div className="flex gap-5">
        {data.map((item) => (
          <RadioItemLegalEntity
            Icon={NaturalPersonIcon}
            description={item.description}
            title={item.title}
            value={item.value}
            key={item.value}
            variant="vertical"
          />
        ))}
      </div>
    ),
    className: "[&>div]:flex-row",
  },
};
