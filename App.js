import React from 'react';
import {Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Image 
        source={require('./assets/mobile.svg')}
      />
      <Text>Get things done with TODO</Text>
    </View>
  );
}
