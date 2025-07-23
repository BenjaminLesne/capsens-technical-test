import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioGroup } from "./radio-group";
import { NaturalPersonIcon } from "@/features/account-creation/components/icons/natural-person";
import { RadioItemLegalEntity } from "./radio-item-legal-entity";
import { LegalEntityIcon } from "@/features/account-creation/components/icons/legal-entity";

const naturalPerson = {
  value: "Natural person",
  title: "Personne physique",
  description: "Vous créez ce compte pour vous-même en tant qu’individu",
} as const;

const enterprise = {
  value: "Entreprise",
  title: "Entreprise",
  description: "Personne morale",
} as const;

const meta = {
  title: "Components/RadioGroup/RadioItemLegalEntity",
  component: RadioItemLegalEntity,
} satisfies Meta<typeof RadioItemLegalEntity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PhysicalPersonEntity: Story = {
  args: {
    description: naturalPerson.description,
    value: naturalPerson.value,
    title: naturalPerson.title,
    Icon: NaturalPersonIcon,
    variant: "default",
    state: "unchecked",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "vertical"],
    },
  },
  render: (args) => (
    <RadioGroup>
      <RadioItemLegalEntity {...args} />
    </RadioGroup>
  ),
};

export const CompanyEntity: Story = {
  args: {
    description: enterprise.description,
    value: enterprise.value,
    title: enterprise.title,
    Icon: LegalEntityIcon,
    variant: "vertical",
    state: "unchecked",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "vertical"],
    },
  },
  render: (args) => (
    <RadioGroup>
      <RadioItemLegalEntity {...args} />
    </RadioGroup>
  ),
};
