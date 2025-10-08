import React, { createContext, useContext, ReactNode } from 'react';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
  typography: typeof typography;
};

const theme: Theme = {
  colors,
  spacing,
  typography
};

const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);

export type { Theme };
