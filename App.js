import React from 'react';
import {View, Text} from 'react-native';
import Navigator from './routes/index';
import Home from './components/register';

export default function App(){
  
  return(
    <View>
      <Home />
    </View>
  );
}
