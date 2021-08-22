import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Hexagon from '../components/Hexagon';

import Triangle from '../components/Triangle'

export default function CenterHub() {
    const { width, height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <View style={{ transform: [{ translateX: -60 }, { rotate: '90deg' }], position: 'absolute', left: width / 2 - 130, top: height / 2 - 125 }} >
                <Triangle />
            </View>
            <View style={{ transform: [{ translateX: -60 }, { rotate: '30deg' }], position: 'absolute', left: width / 2 - 86, top: height / 2 - 49 }} >
                <Triangle />
            </View>
            <View style={{ transform: [{ translateX: -60 }, { rotate: '150deg' }], position: 'absolute', left: width / 2 - 87, top: height / 2 - 202 }} >
                <Triangle />
            </View>
            <View style={{ transform: [{ translateX: -60 }, { rotate: '210deg' }], position: 'absolute', left: width / 2 + 2, top: height / 2 - 201 }} >
                <Triangle />
            </View>
            <View style={{ transform: [{ translateX: -60 }, { rotate: '270deg' }], position: 'absolute', left: width / 2 + 47, top: height / 2 - 125 }}  >
                <Triangle />
            </View>
            <View style={{ transform: [{ translateX: -60 }, { rotate: '330deg' }], position: 'absolute', left: width / 2 + 2, top: height / 2 - 49 }} >
                <Triangle />
            </View>
            <View style={{ position: 'absolute', left: width / 2 - 90, top: height / 2 - 110 }}>
                <Hexagon />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'relative'
    }
})