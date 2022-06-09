import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestManager from './request.js'

export default function App() {
  return (
    <RequestManager />
    // <View style={styles.container}>
    //   <Text>The Next MCU Film</Text>
    //   <StatusBar style="auto" />
    // </View>
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
