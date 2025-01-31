import { OverlayWindow } from './OverlayWindow';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/OverlayWindow',
  component: OverlayWindow,
  tags: ['autodocs'],
} satisfies Meta<typeof OverlayWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => (
    <OverlayWindow>
      <OverlayWindow.Button appearance='outlined'>Open</OverlayWindow.Button>
      <OverlayWindow.Content>
        <div style={{ padding: '1rem' }}>Overlay Content</div>
      </OverlayWindow.Content>
    </OverlayWindow>
  ),
};
