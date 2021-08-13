import { StyleSheet, TouchableOpacity, Animated, Easing, Text } from 'react-native';
import React from 'react';

export default function Button({ text, onPress }) {
    const SPRING_CONFIG = { tension: 2, friction: 3 };

    const fadeAmin = new Animated.Value(1);
    const moveUpAmin = new Animated.Value(0);
    const scaleAmin = new Animated.Value(1);

    const handelPressIn = () => {
        // Animated.parallel([
        //     Animated.timing(fadeAmin, {
        //         toValue: 0,
        //         duration: 1500,
        //         useNativeDriver: true
        //     }),
        //     Animated.timing(moveUpAmin, {
        //         toValue: 1,
        //         duration: 1000,
        //         easing: Easing.linear,
        //         useNativeDriver: true
        //     }),
        // ]).start();
        Animated.spring(scaleAmin, {
            toValue: 0.7,
            ...SPRING_CONFIG,
            useNativeDriver: true
        }).start()
    }

    const handlePressOut = () => {
        Animated.spring(scaleAmin, {
            toValue: 1,
            ...SPRING_CONFIG,
            useNativeDriver: true
        }).start()
    }

    return (
        // <TouchableOpacity onPressIn={handelPressIn} >
        //     <Animated.View style={[styles.button, { opacity: fadeAmin }]}>
        //         <Animated.Text
        //             style={[
        //                 styles.buttonText,
        //                 {
        //                     transform: [
        //                         {
        //                             translateY: moveUpAmin.interpolate({
        //                                 inputRange: [0, 1],
        //                                 outputRange: [0, -15]
        //                             })
        //                         }
        //                     ]
        //                 }]}
        //         > {text}</Animated.Text>
        //     </Animated.View>
        // </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} onPressIn={handelPressIn} onPressOut={handlePressOut} onPress={onPress}>
            <Animated.View style={[
                styles.button,
                {
                    transform: [
                        {
                            scale: scaleAmin
                        }
                    ]
                }]}>
                <Text style={styles.buttonText}>{text}</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: '#040916',
        alignSelf: 'center',
        opacity: 0.78,
        marginVertical: 5,
        marginHorizontal: 5
    },
    buttonText: {
        color: '#7122FA',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 30,
    }
})