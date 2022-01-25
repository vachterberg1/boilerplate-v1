import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from 'styled-components'
import theme from './src/utils/styles/theme'
import HomePage from './src/screen/Home';
import React from 'react';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator/>
    </ThemeProvider>
  );
}