import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

import FlatButton from '../components/Button'

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome To Rectifier Media and Technology</Text>
      </View>
      <FlatButton text={'Sign Up'} onPress={() => navigation.navigate('Sign Up')} />
      <Text style={styles.inlineText}>Already have an account?</Text>
      <FlatButton text={'Sign In'} onPress={() => navigation.navigate('Sign In')} />
      <FlatButton text={'SlideShow'} onPress={() => navigation.navigate("SlideShow")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center',
    marginTop: '5%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 170,
  },
});
