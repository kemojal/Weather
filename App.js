
import React, {useState} from 'react';
import { AppRegistry } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import StackHome from './Navigations/StackHome';
import AddCity from './Screens/AddCity';
import Favorites from './Screens/Favorites';

const Tab = createBottomTabNavigator();

import { BG_COLOR } from './utils/Constants'

import { Provider as StoreProvider } from 'react-redux'
import { store } from './redux/store'
export default function App() {
  // const [ color, setColor ] = useState('')
  // const colors  = [ 'orange', 'crimson', '#010C1D']
  const screenOptions = (route, color) => {
  let iconName;
        switch(route.name){
          case 'StackHome':
            iconName  = "cloud-rain";
            break;
          case 'AddCity':
            iconName = "plus-circle";
            break;
          case 'Favorites':
            iconName = "band-aid";
            break;
          default:
            break;
        }
        return <FontAwesome5 name={iconName} size={32} color={color} />;
};

  return (
    <StoreProvider store={store}>
    <NavigationContainer
    >
      <Tab.Navigator
      screenOptions={
      ({ route }) => ({
      tabBarIcon: ({color})=>screenOptions(route, color)
    })
    }
    tabBarOptions={{
      activeTintColor: 'crimson',
      inactiveTintColor: 'orange',
      // inactiveBackgroundColor: 'rgba(255,255,255,0.01)',
      activeBackgroundColor: 'rgba(255,255,255,0.03)',
      tabStyle:{
        borderRadius: 60,
        width: 80,
        height: 80,
      },
      showLabel: false,
      style: {
            backgroundColor:'#010C1D', //'orange',
            borderTopWidth: 0,
            elevation: 0,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50, 
            height: 140,
            position:'absolute',
            paddingHorizontal: 15,
            paddingVertical: 15,
            justifyContent: 'space-between'
        },
    }}
      >
        <Tab.Screen name="StackHome" component={StackHome} />
        <Tab.Screen name="AddCity" component={AddCity} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
    </StoreProvider>
  );
}

