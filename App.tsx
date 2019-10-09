import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Root } from 'native-base'
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './pages/Loading';
import LoginScreen from './pages/Login';
import MainScreen from './pages/Main';
import SignUpScreen from './pages/SignUp';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
  });
const AuthStack = createSwitchNavigator(
  {
    SignUp: {
      screen: SignUpScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  });

const App = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      Loading: {
        screen: LoadingScreen,
      },
    },
    {
      initialRouteName: 'Loading',
    }));

export default () =>
  <Root>
    <App />
  </Root>
