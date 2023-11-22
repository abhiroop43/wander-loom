import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import BottomTabsNavigation from './BottomTabsNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={BottomTabsNavigation} />
      <Stack.Screen name="DetailsScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
