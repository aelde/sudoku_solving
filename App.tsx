import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from '@theme/index';
import { AppProvider } from '@context/AppContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <AppNavigator />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
