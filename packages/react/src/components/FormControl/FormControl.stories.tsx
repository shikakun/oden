import { TextField } from '../TextField/TextField';
import { FormControl } from './FormControl';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <FormControl {...args}>
      <FormControl.Label htmlFor='example-id'>名前</FormControl.Label>
      <TextField id='example-id' />
    </FormControl>
  ),
};
