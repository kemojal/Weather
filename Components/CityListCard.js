import React from 'react'
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TouchableScale from "react-native-touchable-scale";
import { SharedElement } from "react-navigation-shared-element";
import { CARD_WIDTH, CARD_HEIGHT, RADIUS, DURATION } from '../utils/Constants';
import sunny from '../assets/sunny.png'
import cloudy from '../assets/cloudy.png'
import rainy from '../assets/rainy.png'
import stormy from '../assets/thunder.png'


import * as Animatable from 'react-native-animatable';
import AnimateNumber from 'react-native-animate-number';

import { useDispatch } from 'react-redux'

const animation  = {
    0:{ opacity: 0, translateY: 100},
    1:{ opacity: 1, translateY: 0}
}
export default function CityListCard({weather_color, temp, cityName, weather_icon, navigateTo, i }) {
    let iconName;
    switch (weather_icon) {
        case 'rainy':
            iconName   =rainy
            break;
        case 'sunny':
            iconName   = sunny
            break;
        case 'cloudy':
            iconName   = cloudy
            break;
        case 'stormy':
            iconName   = stormy
            break;
        default:
            break;
    }
    
    const dispatch = useDispatch()

    return (
        <TouchableScale  
        onPress={
            ()=>{
                dispatch({
                    type: 'CHANGE_NAV_PARAMS', 
                    payload: i})

                dispatch({
                    type: 'CHANGE_ICON', 
                    payload: iconName})
                navigateTo()
            }
         }
        activeScale={0.9}
        tension={50}
        friction={7}
        useNativeDriver
        >
         <SharedElement id="card">
        <LinearGradient
        colors={weather_color}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style ={CityListCardStyle.gradientView}
        >
            <View style={CityListCardStyle.Container}>
                <View style={CityListCardStyle.leftView}>
                    <View style={CityListCardStyle.flareContainer}>
                        <Image
                        source  ={ require('../assets/flare.png')
                            
                        }/>
                    </View>
                    <SharedElement id="text">
                    <Animatable.Text 
                    style={CityListCardStyle.cityName}
                    useNativeDriver
                    animation={animation}
                    delay = { 400 }
                    >{cityName}</Animatable.Text>
                    </SharedElement>
                    <SharedElement id="temp">
                    <Text style={CityListCardStyle.temperature}>
                    <AnimateNumber value={temp} countBy={3} timing="easeOut"/>°</Text>
                    </SharedElement>
                </View>
                <View style={CityListCardStyle.rightView}>
                    <Animatable.Image
                    animation="fadeInUp"
                    delay = { DURATION + i * 100 }
                    source  ={ iconName }
                    style={CityListCardStyle.icon}/>
                </View>
            </View>
            
        </LinearGradient>
         </SharedElement>
        
        </TouchableScale>  
    )
}

const CityListCardStyle = StyleSheet.create({
    Container:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        flexDirection: 'row',
        
    },
    gradientView:{
        borderRadius: RADIUS,
        marginBottom: 8
    },
    leftView:{
        flex: 0.5,
        paddingLeft: 38,
        justifyContent: 'center'
    },
    rightView:{
        flex: 0.5,
        paddingLeft: 32,
        justifyContent: 'center'
    },
    cityName:{
        fontSize: 30,
        fontWeight: 'bold', 
        color: 'white'
    },
    temperature:{
        fontSize: 67,
        fontWeight: 'bold', 
        color: '#CDE4FB',
        /*textShadowColor:'#E9EBF6',
        textShadowOffset:{
            width: 1, 
            height: 1},
            textShadowRadius:20,*/
    },
    icon: {
        width: 120,
        
      },
      flareContainer:{
          position: 'absolute',
          top: -100,
          left: -100,
      },
    flare: {
        width: 100,
        height: 100
    }
})
