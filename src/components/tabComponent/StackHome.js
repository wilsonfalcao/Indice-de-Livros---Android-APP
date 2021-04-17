//Sistema
import React from 'react';

//Expo Fonts and Fonts

//Navegação
import { createStackNavigator } from '@react-navigation/stack';
import {HomeView,SearchView} from "../../views/index";



export default function StackHome() {

  const Stack = createStackNavigator();

  return (
        <Stack.Navigator initialRouteName="home"
        screenOptions={{
          headerShown:false,
        }}
        >
          <Stack.Screen name="home" component={HomeView}/>
          <Stack.Screen name="searchview" component={SearchView}/>
        </Stack.Navigator>
  );


}
