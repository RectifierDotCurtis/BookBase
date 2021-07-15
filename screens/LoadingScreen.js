import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Animated, Easing, Dimensions, Image, ScrollView, Text } from 'react-native';
import * as firebase from 'firebase';

const { width, height } = Dimensions.get('screen');
// const height = width * 0.6;

export default function LoadingScreen({ navigation }) {
  useEffect(
    () => {
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     navigation.replace('Dashboard');
      //   } else {
      //     navigation.replace('Home');
      //   }
      // });
      setInterval(() => {
        startAnimation();
      }, 2000);
    }
  );

  const animatedPos = useState(new Animated.Value(1))[0];
  const animatedSize = useState(new Animated.Value(20))[0];
  const fadeAnimation = useState(new Animated.Value(0))[0]
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;

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
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true
    }).start();
  }

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
        style={[{
          transform: [
            {
              translateX: animatedPos.interpolate({
                inputRange: [0, 1],
                outputRange: [width / 35, 0]
              })
            },
            {
              translateY: animatedPos.interpolate({
                inputRange: [0, 1],
                outputRange: [height / 40, 0]
              })
            },
            {
              scale: animatedSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.04]
              })
            }
          ]
        }]}
      />
      <Animated.View style={{ opacity: fadeAnimation }}>
        <ScrollView
          style={{ width, height }}
          horizontal
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height, flexDirection: 'column' }}>
            <Text style={{ width: width * 0.3, alignSelf: 'flex-end' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quae sint, maxime quod molestiae praesentium ipsa. Maxime, harum? Aperiam illum id quis iste repudiandae nulla sint quod minima quaerat.</Text>
            <Text style={{ width: width * 0.3, alignSelf: 'flex-start' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quae sint, maxime quod molestiae praesentium ipsa. Maxime, harum? Aperiam illum id quis iste repudiandae nulla sint quod minima quaerat.</Text>
            <Text style={{ width: width * 0.3, alignSelf: 'flex-end' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum quae sint, maxime quod molestiae praesentium ipsa. Maxime, harum? Aperiam illum id quis iste repudiandae nulla sint quod minima quaerat.</Text>
          </View>
          <View style={{ width, height }}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1620942332284-71961f67dfc2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" }}
              style={{ width, height: width * 0.6 }}
            />
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
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
