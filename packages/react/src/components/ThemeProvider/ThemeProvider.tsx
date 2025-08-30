import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark';

const defaultTheme: ThemeType = 'light';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
    return { theme: defaultTheme, toggleTheme: () => {} };
  }
  return context;
};
