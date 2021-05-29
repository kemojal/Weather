import React, { Fragment} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from "react-navigation-shared-element";

import * as Animatable from 'react-native-animatable';
import sunny from '../assets/sunny.png'
import wind from '../assets/windSpeed.png'
import humidity from '../assets/humidity.png'
import therm from '../assets/thermometer.png'

import { DURATION } from '../utils/Constants';
import { useSelector } from "react-redux";

import AirQuality from './AirQuality';

export default function DetailCard({navigation, route}) {
    // const { item }  = route.params;

    const n   = useSelector((state) => state.n)
     const iconName   = useSelector((state) => state.iconName)
    const {
    cityName, 
    humidity, 
    max_temp, 
    temp,
    weather,
    weather_color,
    weather_icon,
    windSpeed
    } = useSelector((state) => state.currentCard)
    
    return (
        <Fragment>
        <View style={styles.z0}/>
        <View style={styles.z1}/>
        <View>
         <SharedElement id="card">
        <LinearGradient
        style={styles.card}
        colors={weather_color}
        >
            <View style={styles.DetailCard}>
            <SharedElement id="text">
                <Text style={styles.date}>April 3, 2021</Text>
            </SharedElement>
            <SharedElement id="cityName">
                <Text style={styles.cityName}>{cityName}</Text>
            </SharedElement>
            <SharedElement id="temp">
                <Text style={styles.temp}>{temp}</Text>
            </SharedElement>
            <View style={styles.weatherImageView}>
                    <Animatable.Image
                    animation="fadeInUp"
                    delay = { DURATION }
                    source  ={ iconName }
                    style={styles.icon}/>
            </View>
            <SharedElement id="text">
                <Text style={[styles.date, {marginTop: 51}]}>{weather}</Text>
            </SharedElement>
            <View style = {styles.weatherInfos}>
                <View style={styles.leftInfos}>
                    <View style={styles.top}><Text style={styles.text}> wind</Text></View>
                    <View style={styles.center}>
                        <Animatable.Image
                        animation="fadeInUp"
                        delay = { DURATION }
                        source  ={ wind }
                        style={styles.infoIcon}/>
                    </View>
                    <View style={styles.bottom}><Text style={styles.text}>{windSpeed}</Text></View>
                </View>
                <View style={styles.leftInfos}>
                    <View style={styles.top}><Text style={styles.text}> Humidity </Text></View>
                    <View style={styles.center}>
                        <Animatable.Image
                        animation="fadeInUp"
                        delay = { DURATION }
                        source  ={ humidity }
                        style={styles.infoIcon}/>
                    </View>
                    <View style={styles.bottom}><Text style={styles.text}>{humidity}%</Text></View>
                </View>
                <View style={styles.leftInfos}>
                    <View style={styles.top}><Text style={styles.text}> Feeling </Text></View>
                    <View style={styles.center}>
                        <Animatable.Image
                        animation="fadeInDown"
                        delay = { DURATION }
                        source  ={ therm }
                        style={styles.infoIcon}/>
                    </View>
                    <View style={styles.bottom}><Text style={styles.text}>{max_temp}</Text></View>
                </View>  
            </View>
            </View>
        </LinearGradient>
         </SharedElement>
        <AirQuality/>
        </View>
        </Fragment>
        
    )
}

const styles = StyleSheet.create({
    z0: {
        left: 35,
        top: 10,
        width: 363, 
        height: 752,
        backgroundColor: 'rgba(255, 255,255, 0.05)',
        zIndex: 0,
        position: 'absolute',
        borderRadius: 55,
    },
    z1: {
        left: 25,
        top:10,
        width: 370, 
        height: 745,
        backgroundColor: 'rgba(255, 255,255, 0.05)',
        zIndex: 0,
        position: 'absolute',
        borderRadius: 55
    },
    card: {
        borderRadius: 67,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: 0,
    },
    DetailCard:{
        alignSelf: 'stretch',
       backgroundColor: 'transparent',
        height: 746,
        paddingTop: 80,
        borderBottomLeftRadius: 67,
        borderBottomRightRadius: 67,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        alignSelf: 'stretch',
        alignItems: 'center',
        
    },
    date:{
        fontSize: 21,
        fontWeight: 'normal', 
        color: 'white'
    },
    cityName:{
        fontSize: 33,
        fontWeight: 'bold', 
        color: 'white',
        marginTop: 16,
    
    },
    temp:{
        //backgroundColor: 'blue',
        alignSelf: 'stretch',
        fontSize: 100,
        lineHeight: 123,
        fontWeight: 'bold', 
        color: '#CDE4FB',
    },
    weatherImageView:{
        marginTop: 45,
    },
    icon: {
        width: 171,
        height: 140,
    },
    weatherDiscription:{

    },
    weatherInfos:{
        flexDirection: 'row',
        height: 150,
        backgroundColor: 'rgba(5,5,5,0.05)',
        borderRadius: 60,
        overflow: 'hidden',
        marginTop: 33,
        paddingVertical: 15,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        //     },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    leftInfos:{
        flexDirection: 'column',
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    top:{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.25
    },
    center:{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5
    },
    bottom:{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.25
    },
    text:{
        fontSize: 17, 
        color: '#F3F8FF',
    },
    infoIcon:{
        width: 33
    }

    
})
  
//   DetailCard.sharedElements = (route, otherRoute, showing) => {
//   const {item } = route.params;
//   return [
//     { id: "text", animation: "move" },
//   { id: "temp", animation: "fade" },
//   ]
// }
  