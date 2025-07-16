import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "./button";
import Image from "next/image";
import arrowUrl from "../../../../public/icons/arrow.svg";

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
        <span>Suivant</span>{" "}
        <span><Image src={arrowUrl as string} alt="Flèche sur la droite" /></span>
      </>
    ),
    onClick: () => null
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
