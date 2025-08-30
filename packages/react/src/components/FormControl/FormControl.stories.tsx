import type { Meta, StoryObj } from '@storybook/react';
import { useId } from 'react';
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
  render: (args) => {
    const id = useId();
    return (
      <FormControl {...args}>
        <FormControl.Label htmlFor={id}>名前</FormControl.Label>
        <TextField id={id} />
      </FormControl>
    );
  },
};

export const ThemeDark: Story = {
  render: (args) => {
    const id = useId();
    return (
      <FormControl {...args}>
        <FormControl.Label htmlFor={id}>名前</FormControl.Label>
        <TextField id={id} />
      </FormControl>
    );
  },
  decorators: [withThemeDark],
};
