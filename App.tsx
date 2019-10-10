import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Root } from 'native-base'
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './pages/auth/Loading';
import LoginScreen from './pages/auth/Login';
import TodoScreen from './pages/app/Todo';
import ShoppingScreen from './pages/app/Shopping';
import SignUpScreen from './pages/auth/SignUp';

const AppStack = createStackNavigator(
  {
    Todo: {
      screen: TodoScreen,
    },
    Shopping: {
      screen: ShoppingScreen,
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
