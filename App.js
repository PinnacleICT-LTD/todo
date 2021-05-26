import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={"../assets/mobile.svg"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
