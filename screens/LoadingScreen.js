import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Animated, Easing } from 'react-native';
import * as firebase from 'firebase';

export default function LoadingScreen({ navigation }) {
  useEffect(
    () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('Dashboard');
        } else {
          navigation.replace('Home');
        }
      });
    }
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
