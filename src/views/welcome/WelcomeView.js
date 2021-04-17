//Importação Recursos do Sistema
import React from 'react';
import {Text, View } from 'react-native';

//Importação de Recursos de Estilos e Fontes
import Style from "./WelcomeStyle";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {FontsPath} from "../../fonts/InitializeFonts";

//Importação de Componentes Personalizados


export default function WelcomeView({navigation}){

    let [fontsLoaded] = useFonts(FontsPath);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return(

        <View style={Style.welcomeview}>
            <View style={Style.container}>
                    <Text>Splash View</Text>
            </View>
        </View>
    );
}