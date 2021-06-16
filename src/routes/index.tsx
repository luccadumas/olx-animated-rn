import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../constants/colors';
import HomeScreen from '../pages/Home';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
      <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          display: 'none',
        },
        headerStyle: {
          backgroundColor: `${colors.primary}`,
        },
        headerTintColor: '#FFF'
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
  );
}
