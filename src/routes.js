import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

const Stack = createStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen name="Repositories" component={Repositories} />
      </Stack.Navigator>
  );
}

export default Routes;
