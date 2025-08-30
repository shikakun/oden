import type { Meta, StoryObj } from '@storybook/react';
import { withThemeDark } from '../../storybook/decorators';
import { TextField } from '../TextField/TextField';
import { FormControl } from './FormControl';

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  argTypes: {
    required: {
      control: 'boolean',
    },
  },
  args: {
    required: true,
    children: undefined,
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormControl {...args}>
      <FormControl.Label htmlFor="example-id">名前</FormControl.Label>
      <TextField id="example-id" />
    </FormControl>
  ),
};

export const ThemeDark: Story = {
  render: (args) => (
    <FormControl {...args}>
      <FormControl.Label htmlFor="example-id">名前</FormControl.Label>
      <TextField id="example-id" />
    </FormControl>
  ),
  decorators: [withThemeDark],
};
