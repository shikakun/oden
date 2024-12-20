import { fn } from '@storybook/test';
import { HiArrowSmallRight, HiMagnifyingGlass } from 'react-icons/hi2';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'radio', options: ['text', 'filled', 'outlined'] },
    shape: { control: 'radio', options: ['square', 'circle'] },
    size: { control: 'radio', options: ['s', 'm'] },
    width: { control: 'radio', options: ['hug', 'full', 'half', 'third'] },
    children: { control: 'text' },
    Icon: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: HiMagnifyingGlass,
        false: null,
      },
    },
    LeadingIcon: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: HiMagnifyingGlass,
        false: null,
      },
    },
    TrailingIcon: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: HiArrowSmallRight,
        false: null,
      },
    },
    ariaLabel: { control: 'text' },
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
    Icon: undefined,
    LeadingIcon: undefined,
    TrailingIcon: undefined,
    ariaLabel: undefined,
  },
};
