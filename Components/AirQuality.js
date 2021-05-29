import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AirQuality = () => {
    return (
        <View style = { styles.background}>
            <Text style = { styles.title}>Air Quality</Text>
            <Text style = { styles.num}>112</Text>
            <Text style = { styles.pm}>PM2.5</Text>
        </View>
    )
}

export default AirQuality

const styles = StyleSheet.create({

    background:{
        backgroundColor: 'white',
        marginTop: 28,
        height: 460,
        alignItems: 'center',
        paddingVertical: 35,
        borderTopLeftRadius: 67,
        borderTopRightRadius: 67,

    },
    title:{
        fontSize: 22,
        paddingVertical: 5,
    },
    num:{
        fontSize: 160,
        color: 'rgba(0,0,0,0.8)',
        paddingVertical: 5,
        fontWeight: 'bold',
        letterSpacing: 5
    },
    pm:{
        fontSize: 32,
        letterSpacing: 15,
        fontWeight: '100'
    },
})
