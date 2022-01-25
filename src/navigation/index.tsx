import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screen/Home'



const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    )
}

export default RootNavigator