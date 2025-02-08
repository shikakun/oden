import { Color } from '@shikakun/dashi';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../components/ThemeProvider';

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
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

export const withThemeDark = (Story: React.FC) => (
  <ThemeProvider>
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  </ThemeProvider>
);
