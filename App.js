//Sistema
import React from 'react';

//Expo Fonts and Fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {FontsPath} from "./src/fonts/InitializeFonts";

//Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavegation from "./src/components/tabComponent/TabNavegation";
import {TakePhoto} from "./src/views/index";



export default function App() {

  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts(FontsPath);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home"
        screenOptions={{
          headerShown:false,
        }}
        >
          <Stack.Screen name="home" component={TabNavegation}/>
          <Stack.Screen name="camera" component={TakePhoto}/>
        </Stack.Navigator>
    </NavigationContainer>
  );


}
