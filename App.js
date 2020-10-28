import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { Header, Input, CheckBox, Image, ListItem, Avatar, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App() {
  
  return (
  // All inside this View
  <View>
    
    <Header
      // Topic 1: HEADER
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: '100 Days Code - React Native Hear', style: { color: '#fff' } }}/>
    
    <Text 
      // Topic 2: Text Style
      style={styles.headline}>Hi, Lunox!
    </Text>

    <Input
      // Topic 3: INPUT
      placeholder='INPUT: Write something here!'/>

    <Button
      // Topic 4: Button
      title = 'Then, Click here'></Button>
    
    <CheckBox
      // Topic 5: CheckBox
      center
      title='Check Box: Click Here'/>

    <ListItem>
      <Badge
        // Topic 6: Badge
        value={10}
        textStyle={{ color: 'white' }}
        containerStyle={{ marginTop: -20 }}
      ></Badge>
    </ListItem>
    
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
  // For Topic 2: Text Style
  headline: {
    color: 'white', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontWeight: 'bold',
    fontSize: 50,
    backgroundColor: 'purple',
  }
});
