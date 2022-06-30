import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../constants/types';
import {SplashScreen, Dashboard, PortfolioScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={SplashScreen} name="SplashScreen" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={PortfolioScreen} name="PortfolioScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
