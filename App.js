import React from 'react';
import { AppTabNavigator } from './components/AppTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoadingScreen from './screens/LoadingScreen';

export default function App(){
 return(
   <AppContainer />
 )
 }
const switchNavigator = createSwitchNavigator({
  LoadingScreen: {screen: LoadingScreen},
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  BottomTab: {screen: AppTabNavigator},
})
const AppContainer =  createAppContainer(switchNavigator);