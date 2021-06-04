import React from 'react';
import Login from './components/login';
import Register from './components/register';
import AddTask from './components/addTask';
import Home from './components/home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){

  const Stack = createStackNavigator();

const MyStack = () => {
    return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#359a42' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'TODO App',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register'
        }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          title: 'Add Task',
        }}
      />
    </Stack.Navigator>);
}

  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}
