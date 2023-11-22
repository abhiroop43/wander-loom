import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { Icon } from '@rneui/themed';
import { theme } from '../constants/theme';

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bottomTab,
        headerStatusBarHeight: 0,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.bg500,
        tabBarInactiveTintColor: theme.colors.text,
      }}
    >
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" type="ionicon" color={color} size={size} />,
        }}
      /> */}

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="bookmark" type="ionicon" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="paper-plane" type="ionicon" color={color} size={size} />,
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="settings" type="ionicon" color={color} size={size} />,
        }}
      /> */}
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="person" type="ionicon" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  bottomTab: {
    // ios shadow start //
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    // ios shadow end //
    // android shadow start //
    elevation: 2,
    // android shadow end //
  },
});
