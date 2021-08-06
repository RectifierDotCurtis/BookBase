import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Animated, Easing, ScrollView, Text, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import FlatButton from './Button';

export default function SlideShow({ navigation }) {
  const { width, height } = Dimensions.get('screen');
  const fadeAnim = new Animated.Value(0);
  const posAnim = new Animated.Value(0);
  const sizeAnim = new Animated.Value(2);
  const fadeInSlideShow = new Animated.Value(0);
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;

  useEffect(
    () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true
        }),
        Animated.parallel([
          Animated.timing(posAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(sizeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(fadeInSlideShow, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
          }),
        ])
      ]).start();
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     navigation.replace('Dashboard');
      //   } else {
      //     navigation.replace('Home');
      //   }
      // });
    }, []);

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size='large' /> */}
      <Animated.Image
        source={require('../assets/placeholder.png')}
        style={[
          {
            opacity: fadeAnim,
            position: 'absolute',
            top: 380
          },
          {
            transform: [
              {
                translateX: posAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100]
                })
              },
              {
                translateY: posAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -350]
                })
              },
              {
                scale: sizeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5]
                })
              }
            ]
          }
        ]}
      />
      <Animated.View style={{ opacity: fadeInSlideShow }}>
        <ScrollView
          horizontal
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ width: 200, alignSelf: 'flex-end' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quae sint, maxime quod molestiae praesentium ipsa. Maxime, harum? Aperiam illum id quis iste repudiandae nulla sint quod minima quaerat.</Text>
            <Text style={{ width: 200, alignSelf: 'flex-start' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quae sint, maxime quod molestiae praesentium ipsa. Maxime, harum? Aperiam illum id quis iste repudiandae nulla sint quod minima quaerat.</Text>
            <Text style={{ width: 200, alignSelf: 'flex-end' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quae sint, maxime quod molestiae praesentium ipsa. Maxime, harum? Aperiam illum id quis iste repudiandae nulla sint quod minima quaerat.</Text>
            <FlatButton
              text='button'
              onPress={() =>
                firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                    navigation.replace('Dashboard');
                  } else {
                    navigation.replace('Home');
                  }
                })
              }
            />
          </View>
          <View style={{ width, flexDirection: 'column', justifyContent: 'center' }}>
          </View>
          <View style={{ width, flexDirection: 'column', justifyContent: 'center' }}>

          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      </Animated.View>
    </View >
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
  paginationWrapper: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    marginLeft: 10,
  }
});