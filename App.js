import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Input, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App() {
  return (
    <View>
    
    <Header
    // First topic HEADER
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: '100 Days Code - React Native Hear', style: { color: '#fff' } }}/>
    
    <Input
    // Second topic INPUT
      placeholder='INPUT: Write something here!'/>
    
    <CheckBox
    // Third topic CheckBox
      center
      title='Check Box: Click Here'/>
      
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
