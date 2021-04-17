import React from 'react';
import {StyleSheet,TextInput,TouchableOpacity,View } from 'react-native';
import {Searchicon,PhotoCameraicon} from "../../icons/ImagesSVG";
import { Dimensions } from 'react-native';

export default function searchBar({navigation}){

    const MoveToCamera = () =>{
        navigation.navigate("camera");
    }

    return(

        <View style={{alignItems:"center",alignContent:"center",flexDirection:"row"}}>

            <View style={{
                        position:"absolute",
                        right:20,
                        alignItems:"center",
                        justifyContent:"center",
                        zIndex:10,
                        flexDirection:"row",
                    }}>
                <Searchicon width={20} height={20} fill="#000"/>
                <View style={{marginLeft:Dimensions.get("window").width - 120}}>
                    <TouchableOpacity onPress={MoveToCamera}>
                        <PhotoCameraicon width={20} height={20} fill="#000"/>
                    </TouchableOpacity>
                </View>
                
            </View>
            

            <TextInput 
                placeholder="Autor, livros, editoras, ISBN..."
                style={{
                    
                    width:Dimensions.get("window").width - 50,
                    height:45,
                    backgroundColor:'white',
                    borderRadius:6,
                    paddingHorizontal:35,
                    fontFamily:"GalanoAltBold",
                    fontSize:15,
                    color:"rgb(111,111,111)"
                    }}

            />

        </View>

    );
}

const styles = StyleSheet.create({

});