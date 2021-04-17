//Importação Recursos do Sistema
import React from 'react';
import {Text, View } from 'react-native';

//Importação de Recursos de Estilos e Fontes
import Style from "./EstanteStyle";

//Importação de Componentes Personalizados


export default function EstanteView({navigation}){

    return(

        <View style={Style.estanteview}>
            <View style={Style.container}>
                    <Text>Estante View</Text>
            </View>
        </View>
    );
}