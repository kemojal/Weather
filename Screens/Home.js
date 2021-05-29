import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  FlatList, 
  StyleSheet, 
  Text, 
  View,
  Animated } from 'react-native';
import { SharedElement } from "react-navigation-shared-element";

import { BG_COLOR, APP_PADDING } from '../utils/Constants';
// import { Data } from '../Data'
import { useSelector } from "react-redux";
import CityListCard from '../Components/CityListCard';

import { useNavigation } from '@react-navigation/native'
import { CARD_HEIGHT } from '../utils/Constants';


export default function Home({modal, route, navigation}) {
  
  const Data  = useSelector((state) => state.Data);
  const onPress = () => {
    navigation.navigate(
      "StackHome",{
      screen: 'Detail', params: {name: 'Brent'}
      });
  };

  const onPressModal = () => {
    navigation.navigate("Modal");
  };
  const scrollY  = useRef(new Animated.Value(0)).current;


  const RenderLit  = ({item, index})=>{
    
    const inputRange  = [-1, 0, CARD_HEIGHT * index, CARD_HEIGHT * (index+2) ]
    const scale   = scrollY.interpolate({inputRange, outputRange:[1,1,1, 0]})
    const opacityInputRange  = [-1, 0, CARD_HEIGHT * index, CARD_HEIGHT * (index+ 0.5) ]
    const opacity   = scrollY.interpolate({inputRange:opacityInputRange, outputRange:[1,1,1, 0]})
    
    return (
            <Animated.View 
            style = {
              {transform: [{scale}],
              opacity
              }}>
            <CityListCard 
              key = {index} 
              {...item} 
              navigateTo = {modal ? ()=>onPressModal : onPress} 
              i = {index}/>
              </Animated.View>
              )
          };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" hidden  ={ true }/>
            <Animated.FlatList
            style = {styles.scrollView}
            data={Data}
            renderItem={RenderLit}
            keyExtractor={
              (item) => {
                return item.id}
              }
            onScroll = {
              Animated.event(
                [{nativeEvent:{contentOffset:{ y: scrollY}}}],
                {useNativeDriver: true}
              )
            }/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: BG_COLOR,
    padding: APP_PADDING,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    
  }
});
