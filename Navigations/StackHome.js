
import React from 'react';
import { AppRegistry } from 'react-native';

//import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
//import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home'
import Detail from '../Screens/Detail'


const Stack = createSharedElementStackNavigator();


export default function StackHome() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Cities" }}
          component={Home}
          options={{
            headerShown: false,
          
        }}
  
        />
        <Stack.Screen 
        name="Detail" 
        component={Detail} 
        options={{
            headerShown: false,
          
        }}
        sharedElements = {
          (route, otherRoute, showing) => {
            return[{id: "image"},{id: "text"},{id: "card", animation: 'move'}];
            }
        }
        />
      </Stack.Navigator>
    
  );
}

