import '../global.css';

import { ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useTheme } from '~shared/hooks';
import { LIGHT_THEME, DARK_THEME } from '~shared/constants';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isColorSchemeLoaded, isDarkColorScheme } = useTheme();

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
      <Slot />
    </ThemeProvider>
  );
}
