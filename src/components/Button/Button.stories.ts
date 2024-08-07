import { fn } from '@storybook/test';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  args: {
    appearance: 'text',
    children: 'Submit',
    shape: 'square',
    size: 'm',
    width: 'hug',
  },
};
