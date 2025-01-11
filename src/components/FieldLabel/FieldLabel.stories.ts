import { FieldLabel } from './FieldLabel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/FieldLabel',
  component: FieldLabel,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: '名前',
    htmlFor: 'example-id',
    required: true,
    requiredFieldIndicator: null,
  },
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {};
