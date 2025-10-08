import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from '@theme/index';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
