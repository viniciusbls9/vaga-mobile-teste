import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SinglePokemon from './pages/SinglePokemon';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="SinglePokemon" component={SinglePokemon} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;