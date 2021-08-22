import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Hexagon() {
    return (
        <TouchableOpacity style={{ flexDirection: 'row' }}>
            {/* <LinearGradient colors={['white', '#fda3b2']} style={styles.rec1} />
            <LinearGradient colors={['white', '#fda3b2']} style={styles.rec2} />
            <LinearGradient colors={['white', '#fda3b2']} style={styles.rec3} /> */}
            <View style={styles.rec1} />
            <View style={styles.rec2} />
            <View style={styles.rec3} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rec1: {
        width: 0,
        borderStyle: 'solid',
        borderBottomWidth: 72,
        borderTopWidth: 72,
        borderRightWidth: 50,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: '#040916',
        borderRadius: 3
    },
    rec2: {
        width: 80,
        height: 144,
        backgroundColor: '#040916',
        borderRadius: 3
    },
    rec3: {
        width: 0,
        borderStyle: 'solid',
        borderTopWidth: 72,
        borderLeftWidth: 50,
        borderBottomWidth: 72,
        borderTopColor: 'transparent',
        borderLeftColor: '#040916',
        borderBottomColor: 'transparent',
        borderRadius: 3
    }
})