import React from 'react';
import {Text, Button, Appbar} from 'react-native-paper';
import {StyleSheet, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './components/welcom';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="Welcome Page" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
    <Appbar.Header>
      <Appbar.Content title="TODO App" subtitle="Second TODO App" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
      <View>
        <Image 
          source={require('../assets/mobile.png')}
        />
      </View>

      <View>
        <Text styles={styles.header}>Get things done with TODO</Text>
      </View>

      <View>
        <Button mode="contained" icon='back' onPress={() => nextPage}>
          Get Started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 10,
  },
  header: {
    fontSize: 26,
    color: '#444',
    fontWeight: 'bold'
  }
});