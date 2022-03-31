import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screen/Main';
import CarouselPage from '../screen/CarouselPage';



const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="Carousel" component={CarouselPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    )
}

export default RootNavigator