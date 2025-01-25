import { MdArrowDropDown } from 'react-icons/md';
import { OverlayPopup } from './OverlayPopup';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/OverlayPopup',
  component: OverlayPopup,
  tags: ['autodocs'],
} satisfies Meta<typeof OverlayPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => (
    <OverlayPopup>
      <OverlayPopup.Button appearance='outlined' TrailingIcon={MdArrowDropDown}>
        Menu
      </OverlayPopup.Button>
      <OverlayPopup.Content>
        <div
          style={{
            boxSizing: 'border-box',
            width: '20rem',
            height: '8rem',
            padding: '1rem',
          }}
        >
          Menu Contents
        </div>
      </OverlayPopup.Content>
    </OverlayPopup>
  ),
};
