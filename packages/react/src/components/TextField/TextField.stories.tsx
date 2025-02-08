import { Color } from '@shikakun/dashi';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../ThemeProvider';
import { TextField } from './TextField';
import type { Meta, StoryObj } from '@storybook/react';

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

export const ThemeDark: Story = {};

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    if (theme !== 'dark') {
      toggleTheme();
    }
  }, [theme, toggleTheme]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '1rem',
        backgroundColor:
          theme === 'dark'
            ? Color.background.page.dark
            : Color.background.page.light,
      }}
    >
      {children}
    </div>
  );
};

ThemeDark.decorators = [
  (Story) => {
    return (
      <ThemeProvider>
        <ThemeWrapper>
          <Story />
        </ThemeWrapper>
      </ThemeProvider>
    );
  },
];
