import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { SharedElement } from "react-navigation-shared-element";
import { BG_COLOR, APP_PADDING } from '../utils/Constants';
import DetailCard from '../Components/DetailCard';



export default function Detail() {
    return (
     
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <DetailCard/>
            </ScrollView>
        </View>
       
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: BG_COLOR,
    padding: APP_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    
  }
});

/*Detail.sharedElements = (route, otherRoute, showing) => {
  const {item } = route.params;
  return [
    { id: "text", animation: "move" },
  { id: "temp", animation: "fade" },
  ]
}
  */

