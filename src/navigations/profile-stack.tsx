import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ProfileDetail} from '../screens';
import {BottomNavigation} from './bottom-navigation';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {animationEnabled: false};
      }}>
      <Stack.Screen name="home" component={BottomNavigation} />
      <Stack.Screen name="detail" component={ProfileDetail} />
    </Stack.Navigator>
  );
};
