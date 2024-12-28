import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button';
import { OverlayWindow } from './OverlayWindow';

const meta: Meta<typeof OverlayWindow> = {
  title: 'Components/OverlayWindow',
  component: OverlayWindow,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const OverlayDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open</Button>
      <OverlayWindow
        position='bottom'
        isOpen={isOpen}
        onClose={handleClose}
        CloseIcon={MdClose}
      >
        <div style={{ padding: '1rem' }}>Overlay Content</div>
      </OverlayWindow>
    </>
  );
};

export const InteractiveDemo: Story = {
  render: () => <OverlayDemo />,
};
