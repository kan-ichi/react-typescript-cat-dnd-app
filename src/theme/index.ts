import * as React from 'react';
import { createTheme, PaletteMode, Theme } from '@mui/material';

function createCustomTheme(mode: PaletteMode): Theme {
  return createTheme({
    palette: {
      mode,
    },
  });
}

export const light = createCustomTheme('light');
export const dark = createCustomTheme('dark');
export const ToggleThemeContext = React.createContext(() => {});

export function useToggleTheme() {
  return React.useContext(ToggleThemeContext);
}
