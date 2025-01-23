import { MdArrowDropDown } from 'react-icons/md';
import { ActionMenu } from './ActionMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => (
    <ActionMenu>
      <ActionMenu.Button appearance='outlined' TrailingIcon={MdArrowDropDown}>
        Menu
      </ActionMenu.Button>
      <ActionMenu.Overlay>
        <div
          style={{
            boxSizing: 'border-box',
            width: '20rem',
            height: '8rem',
            padding: '1rem',
          }}
        >
          Menu Content
        </div>
      </ActionMenu.Overlay>
    </ActionMenu>
  ),
};
