import { OverlayWindow } from './OverlayWindow';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/OverlayWindow',
  component: OverlayWindow,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['bottom', 'right'],
    },
  },
} satisfies Meta<typeof OverlayWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: ({ position }) => {
    return (
      <OverlayWindow position={position}>
        <OverlayWindow.Button appearance='outlined'>Open</OverlayWindow.Button>
        <OverlayWindow.Content>
          <div style={{ padding: '1rem' }}>Overlay Content</div>
        </OverlayWindow.Content>
      </OverlayWindow>
    );
  },
  args: {
    position: 'bottom',
  },
};
