import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "./button";
import { RightArrowIcon } from "@/components/icons/right-arrow-icon";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <span>Suivant</span>
        <span>
          <RightArrowIcon className="w-5" />
        </span>
      </>
    ),
    onClick: () => null,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
