import { OverlayWindow } from './OverlayWindow';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/OverlayWindow',
  component: OverlayWindow,
  argTypes: {
    position: {
      control: 'radio',
      options: ['bottom', 'right'],
    },
  },
  args: {
    position: 'bottom',
  },
} satisfies Meta<typeof OverlayWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <OverlayWindow {...args}>
        <OverlayWindow.Button appearance='outlined'>Open</OverlayWindow.Button>
        <OverlayWindow.Content>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '200vh',
              padding: '1rem',
            }}
          >
            <span>Overlay Content</span>
            <span>End of Content</span>
          </div>
        </OverlayWindow.Content>
      </OverlayWindow>
    );
  },
};
