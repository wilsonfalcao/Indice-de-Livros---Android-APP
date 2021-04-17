import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function TabMenuCustom({accessibilityState, children, onPress}){

    return(

        <View 
            style={{flex:1,}}
        >
           <View style={styles.navBar}>

                <TouchableWithoutFeedback>
                <View style={[styles.button, styles.actionBtn]}>

                    <Image style={{ marginTop:4,marginLeft:5,width: 70, height: 70 }}
                        resizeMode="contain"
                        source={{ uri: 'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg' }} 
                    />
                    
                </View>
            </TouchableWithoutFeedback>

           </View>
        </View>

    );
}

const styles = StyleSheet.create({
    navBar:{
        position:"absolute",
        bottom:0,
        left:0,
        flexDirection:"row",
        width: Dimensions.get('window').width,
        height:70,
        backgroundColor: "white",

    },
    button: {
        width: 80,
        height: 80,
        left:(Dimensions.get('window').width - 80)/2,
        bottom: 35,
        borderRadius: 50,
        position: 'absolute',

    },
    actionBtn: {
        backgroundColor: 'rgb(236,236,236)',

    }

});