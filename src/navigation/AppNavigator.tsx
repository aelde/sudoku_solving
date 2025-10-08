import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '@screens/HomeScreen';
import RideBookingScreen from '@screens/RideBookingScreen';
import DeliveryScreen from '@screens/DeliveryScreen';
import WalletScreen from '@screens/WalletScreen';
import ProfileScreen from '@screens/ProfileScreen';
import { useTheme } from '@theme/index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();
  const getIconName = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Rides':
        return 'navigation';
      case 'Delivery':
        return 'shopping-bag';
      case 'Wallet':
        return 'credit-card';
      case 'Profile':
      default:
        return 'user';
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
          height: 70,
          paddingBottom: 10
        },
        tabBarIcon: ({ color, size }) => <Feather name={getIconName(route.name)} color={color} size={size} />
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rides" component={RideBookingScreen} />
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const theme = useTheme();
  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background
    }
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
