import type { Meta, StoryObj } from '@storybook/react';
import { withThemeDark } from '../../storybook/decorators';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
    width: {
      control: 'radio',
      options: ['auto', 'full', 'half', 'third'],
    },
  },
  args: {
    disabled: false,
    error: false,
    rows: 1,
    width: 'auto',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <TextField {...args} />,
};

export const ThemeDark: Story = {
  decorators: [withThemeDark],
};
