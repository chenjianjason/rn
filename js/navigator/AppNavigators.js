import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  Ionicons  from 'react-native-vector-icons/Ionicons';


import LoginByCodeScreen from '../pages/LoginByCodeScreen'
import LoginByPwdScreen from '../pages/LoginByPwdScreen'
import AuthenticScreen from '../pages/AuthenticScreen'
// tabbar start
import HomeScreen from '../pages/HomeScreen'
import BorrowScreen from '../pages/BorrowScreen'
import ServerScreen from '../pages/ServerScreen'
import MyScreen from '../pages/MyScreen'
// tabbar end
import PaymentScreen from '../pages/PaymentScreen'
import SettingsScreen from '../pages/SettingsScreen'
import VipScreen from '../pages/VipScreen'
import WebviewProductScreen from '../pages/WebviewProductScreen'
import WebviewServerScreen from '../pages/WebviewServerScreen'

const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon:({focused,size,color})=>{
          let icon;
          if(route.name==="首页"){
            icon = focused ?
            (
              <Image
                source={ require('../assets/tabbar/home_1.png') }
                style={{ width: 25, height: 25, }} />
            ) : ( <Image
              source={ require('../assets/tabbar/home.png') }
              style={{ width: 25, height: 25, }} />)
          }else if(route.name==="MyScreen"){
            icon = focused ? (
              <Image
                source={ require('../assets/tabbar/my_1.png') }
                style={{ width: 25, height: 25, }} />
            ) : (<Image
              source={ require('../assets/tabbar/my.png') }
              style={{ width: 25, height: 25, }} />)
          }
          return icon;
        }
      })}
      tabBarOptions={{activeTintColor:"#07B5D1",inactiveTintColor:"gray"}}
    >
      <BottomTab.Screen name="首页" component={HomeScreen} />
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
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="LoginByCodeScreen" component={LoginByCodeScreen} />
        <Stack.Screen name="LoginByPwdScreen" component={LoginByPwdScreen} />
        <Stack.Screen name="AuthenticScreen" component={AuthenticScreen} />

        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="VipScreen" component={VipScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="WebviewProductScreen" component={WebviewProductScreen} />
        <Stack.Screen name="WebviewServerScreen" component={WebviewServerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;