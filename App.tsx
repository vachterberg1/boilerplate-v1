import {ThemeProvider} from 'styled-components'
import theme from './src/utils/styles/theme'
import React from 'react';
import RootNavigator from './src/navigation';
import {Poppins_400Regular, Poppins_700Bold, useFonts} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })
  
  if(!fontsLoaded){
    return (<AppLoading />)
  }
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator/>
    </ThemeProvider>
  );
}