//Sistema
import React,{useRef} from 'react';
import {Text, View,SafeAreaView,Dimensions,StyleSheet,Animated,FlatList,Image } from 'react-native';

//Estilos, Fonts e Efeitos
import Style from "./StyleHome";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {FontsPath} from "../../../src/fonts/InitializeFonts";

//Components
import SearchBar from "../../components/searchComponent/searchBar";

//Icons
import {Staricon} from "../../icons/ImagesSVG";

//Temporary
import data from "../../../DataDemo";

export default function HomeView({navigation}){

    let [fontsLoaded] = useFonts(FontsPath);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const renderCourosel = ({item}) =>{
        return(
            <View style={Style.flatlistView}>
                <View style={{width:"100%",height:"100%"}}>
                    <View style={Style.bookBox}>
                        <View style={Style.shadowBookMain}>
                            <Image style={Style.flatlistPhoto} source={{uri:item.imagem}}/>
                        </View>
                    </View>
                    <View style={{marginTop:15,flexDirection:"row"}}>
                        <Staricon width={20} height={20} fill="rgb(255,193,7)"/>
                        <Text style={Style.flatlistRatingStar}>{(Math.round(item.rank*100)/100)}</Text>
                    </View>
                    <View style={{flexDirection:"column"}}>
                        <Text style={Style.flatlistBookTitle}>
                            {String(item.titulo).substr(0,35)}...
                        </Text>
                        <Text style={Style.flatlistBookAuthor}>
                            {item.autor}, {item.ano}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    const scrollX = new Animated.Value(0);

    const backgroundImageBluerAction = () =>{
        {data.map(({imagem,id})=>{

            const inputRange = [
                (id -1) * Dimensions.get("window").width,
                 id * Dimensions.get("window").width,
                (id +1) * Dimensions.get("window").width,
            ];
            
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange:[0,1,0],
            });

            return(
                <Animated.Image
                        key={`imagem-${id}`}
                        style={[StyleSheet.absoluteFillObject,
                            {
                                opacity
                            }
                        ]}
                        source={{uri:imagem}}
                        blurRadius={50}
                />
            );
        })}
    }

    return(

        <SafeAreaView style={Style.HomeView}>

            {data.map(({imagem},index)=>{

                const inputRange = [
                    (index -1) * (Dimensions.get("window").width-80),
                     index * (Dimensions.get("window").width-80),
                    (index +1) * (Dimensions.get("window").width-80)
                ];

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0,1,0]
                })

                return(
                    <Animated.Image
                            key={`image-${index}`}
                            style={[StyleSheet.absoluteFillObject,
                                {
                                    opacity
                                }
                            ]}
                            source={{uri:imagem}}
                            blurRadius={10}
                    />
                );

            })}

            <View style={{flex:1,top:50}}>
                <View style={{alignItems:"center"}}>
                    <SearchBar navigation={navigation}/>
                </View>
                <View style={{marginLeft:25,marginTop:15}}>
                    <Text style={Style.titleHome}>Em Alta</Text>
                    
                    {/* FlatList Book*/}

                    <Animated.FlatList
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {x:scrollX}}}],
                            {useNativeDriver: true} // <-- Add this
                        )}
                        data={data}
                        horizontal={true}
                        pagingEnabled={true}
                        snapToInterval={280}
                        keyExtractor={(_,index)=>index.toString()}
                        renderItem={renderCourosel}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}