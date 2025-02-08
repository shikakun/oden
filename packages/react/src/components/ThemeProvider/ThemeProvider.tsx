import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  defaultTheme?: ThemeType;
}> = ({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem('theme') as ThemeType) || defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: 'light', toggleTheme: () => {} };
  }
  return context;
};
