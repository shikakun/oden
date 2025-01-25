import { fn } from '@storybook/test';
import { useRef } from 'react';
import { MdArrowForward, MdSearch } from 'react-icons/md';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['text', 'outlined', 'tinted', 'filled'],
    },
    shape: { control: 'radio', options: ['square', 'circle'] },
    size: { control: 'radio', options: ['s', 'm'] },
    width: { control: 'radio', options: ['auto', 'full', 'half', 'third'] },
    layout: { control: 'radio', options: ['center', 'start', 'space-between'] },
    children: { control: 'text' },
    Icon: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: MdSearch,
        false: null,
      },
    },
    LeadingIcon: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: MdSearch,
        false: null,
      },
    },
    TrailingIcon: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: MdArrowForward,
        false: null,
      },
    },
    ariaLabel: { control: 'text' },
    disabled: { control: 'boolean' },
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
    width: 'auto',
    layout: 'center',
    Icon: undefined,
    LeadingIcon: undefined,
    TrailingIcon: undefined,
    ariaLabel: undefined,
    disabled: false,
    onClick: fn(() => {
      alert('Button clicked');
    }),
  },
};

export const WithRef: Story = {
  render: function WithRefComponent() {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const handleFocusClick = () => {
      if (buttonRef.current) {
        buttonRef.current.focus();
        alert('Button focused');
      }
    };

    return (
      <div>
        <Button appearance='outlined' onClick={handleFocusClick}>
          Click to Focus the Target Button
        </Button>

        <Button appearance='text' ref={buttonRef}>
          Target Button
        </Button>
      </div>
    );
  },
};
