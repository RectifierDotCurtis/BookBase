import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Animated, Easing } from 'react-native';
import * as firebase from 'firebase';

export default function SlideShow({ navigation }) {
  useEffect(
    () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('Dashboard');
        } else {
          navigation.replace('Home');
        }
      });
      startAnimation();
    }
  );

  const animatedPos = useState(new Animated.Value(0))[0];
  const animatedSize = useState(new Animated.Value(30))[0];

  const startAnimation = () => {
    Animated.timing(animatedPos, {
      toValue: 10,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
    Animated.timing(animatedSize, {
      toValue: 10,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size='large' /> */}
      <Animated.Image
        source={require('../assets/placeholder.png')}
        style={[{
          transform: [
            {
              translateX: animatedPos.interpolate({
                inputRange: [0, 1],
                outputRange: [15, 0]
              })
            },
            {
              translateY: animatedPos.interpolate({
                inputRange: [0, 1],
                outputRange: [40, 0]
              })
            },
            {
              scale: animatedSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.03]
              })
            }
          ]
        }]}
      />
    </View>
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