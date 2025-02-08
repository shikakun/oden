import { fn } from '@storybook/test';
import {
  MdAdd,
  MdArrowDropDown,
  MdChevronRight,
  MdSearch,
} from 'react-icons/md';
import { withThemeDark } from '../../storybook/decorators';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['text', 'outlined', 'tinted', 'filled'],
    },
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
    color: {
      control: 'radio',
      options: ['default', 'muted', 'interactive', 'negative'],
    },
    disabled: { control: 'boolean' },
    Icon: {
      control: 'radio',
      options: [undefined, 'MdAdd', 'MdSearch'],
      mapping: { undefined, MdAdd, MdSearch },
    },
    LeadingIcon: {
      control: 'radio',
      options: [undefined, 'MdAdd', 'MdSearch'],
      mapping: { undefined, MdAdd, MdSearch },
    },
    TrailingIcon: {
      control: 'radio',
      options: [undefined, 'MdArrowDropDown', 'MdChevronRight'],
      mapping: { undefined, MdArrowDropDown, MdChevronRight },
    },
    layout: { control: 'radio', options: ['center', 'start', 'space-between'] },
    shape: { control: 'radio', options: ['square', 'circle'] },
    size: { control: 'radio', options: ['s', 'm'] },
    width: { control: 'radio', options: ['auto', 'full', 'half', 'third'] },
    href: { control: 'text' },
    target: { control: 'text' },
    type: { control: 'radio', options: ['button', 'submit', 'reset'] },
  },
  args: {
    appearance: 'text',
    ariaLabel: undefined,
    children: 'Submit',
    color: 'default',
    disabled: false,
    Icon: undefined,
    LeadingIcon: undefined,
    TrailingIcon: undefined,
    layout: 'center',
    onClick: fn(() => {
      alert('Button clicked');
    }),
    shape: 'square',
    size: 'm',
    width: 'auto',
    href: undefined,
    target: undefined,
    type: 'button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThemeDark: Story = {
  decorators: [withThemeDark],
};
