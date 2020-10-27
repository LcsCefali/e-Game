import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../routes/home.routes';
import PlayDice from '../pages/PlayDice';

export default function Routes () {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{
          headerShown: false,
        }}/>
        <Screen name="PlayDice" component={PlayDice} options={{
          headerShown: false
        }}/>
      </Navigator>
    </NavigationContainer>
  );
}
