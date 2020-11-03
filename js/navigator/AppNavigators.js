import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginByCodeScreen from '../pages/LoginByCodeScreen'
import LoginByPwdScreen from '../pages/LoginByPwdScreen'
// tabbar start
import HomeScreen from '../pages/HomeScreen'
import BorrowScreen from '../pages/BorrowScreen'
import ServerScreen from '../pages/ServerScreen'
import MyScreen from '../pages/MyScreen'
// tabbar end
import PaymentScreen from '../pages/PaymentScreen'
import WebviewProductScreen from '../pages/WebviewProductScreen'

const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarLabel: '首页'}} />
      <BottomTab.Screen name="BorrowScreen" component={BorrowScreen}  options={{ tabBarBadge: 3 }} />
      <BottomTab.Screen name="ServerScreen" component={ServerScreen} />
      <BottomTab.Screen name="MyScreen" component={MyScreen} />
    </BottomTab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginByCodeScreen" component={LoginByCodeScreen} />
        <Stack.Screen name="LoginByPwdScreen" component={LoginByPwdScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="WebviewProductScreen" component={WebviewProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;