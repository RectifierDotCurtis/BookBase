import React from 'react'
import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native'

export default function Triangle({ text, onPress }) {
    const topLeft = new Animated.Value(0)

    return (
        <TouchableOpacity>
            <Animated.View>
                <View style={styles.triangle} />
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderBottomWidth: 174,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgba(150,123,182, 1.0)',
    }
})