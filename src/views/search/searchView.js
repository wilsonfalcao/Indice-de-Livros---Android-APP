//Importação Recursos do Sistema
import React, { useState,useEffect } from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, InteractionManager } from 'react-native';
import {Staricon} from "../../../src/icons/ImagesSVG";

//Importação de Recursos de Estilos e Fontes
import Style from "./StyleSearch";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {FontsPath} from "../../fonts/InitializeFonts";

//Importação de Componentes Personalizados
import SearchBar from "../../components/searchComponent/searchBar";

//Temporary
import data from "../../../DataDemo";
import { ScrollView } from 'react-native-gesture-handler';

export default function searchView({navigation,route}){


    //Viariáveis da View
    const {termSearch} = route.params;
    let ScrollSize = null;
    const [dataBooks, setDataBooks] = useState(data);
    const [refresh,setRefresh] = useState(refresh);
    const [filterShow,setFilterShow] = useState(false);
    
    let [fontsLoaded] = useFonts(FontsPath);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const SortDataBooks = (Sort) =>{

        switch(Sort){
            case 1 :
                dataBooks.sort((a,b)=>a.autor.localeCompare(b.autor));
                break;
            case 2:
                dataBooks.sort((a,b)=>a.rank < b.rank);
                break;
            case 3:
                dataBooks.sort((a,b)=>a.ano < b.ano);
                break;
            case 4:
                dataBooks.sort((a,b)=>a.titulo.localeCompare(b.titulo));
                break;
            case 5:
                dataBooks.sort((a,b)=>a.publisher.localeCompare(b.publisher));
                break;
            default:
                null;
                break;
        }
        console.log(refresh);
        setRefresh(!refresh);
        setFilterShow(false);

    }

    const ViewBooksData = ({books}) =>{

        let StartViews = [];

        for(let count =1;count <= books.rank;count++){
            StartViews.push (<Staricon  width={10} height={10} fill="rgb(255,193,7)"/>);
        }

        return(
            <View key={"v"+books.id} style={{width:80,height:160}}>
                <TouchableOpacity key={"b"+books.id} style={{width:80,height:120,}}>
                    <Image style={{width:"100%",height:"100%",}} source={{uri:books.imagem}}/>
                </TouchableOpacity>
                <View key={"s"+books.id} style={{width:"100%",marginTop:10,flexDirection:"row",justifyContent:"space-around"}}>
                    {StartViews}
                </View>
            </View>
        );
    }

    const returnDataView = ({item}) =>{
        return(
            <ViewBooksData books={item}/>
        );
    }

    return(

        <SafeAreaView style={Style.searchWelcome}>
            <View style={Style.screenHeader}>
                <View style={Style.titleScreen2}>
                    <Text style={{fontFamily:"GalanoAltBold",fontSize:30,color:"white"}}>Pesquisas</Text>
                </View>
                <View style={Style.searchBar}>
                    <SearchBar navigation={navigation}/>
                </View>
                <View style={Style.searchBarFilters}>
                    <Text style={{fontFamily:"GalanoAltBold",fontSize:18,color:"white"}}>{data.length} resultados</Text>
                    <TouchableOpacity onPress={()=>{
                        setFilterShow(!filterShow);
                    }}>
                        <Text style={{fontFamily:"GalanoAltBold",fontSize:18,color:"white"}}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {filterShow && <View 
                    style={{
                    width:"100%",
                }}>
                    <View 
                        style={Style.filterView}>

                        <Text style={Style.filterTitle}>Filtrar por:</Text>

                        <TouchableOpacity onPress={()=>{
                            SortDataBooks(4);
                        }} style={Style.filterButton}>
                            <Text style={{
                                color:"white",
                                fontFamily:"GalanoAltBold",
                                fontSize:15,
                            }}>Título</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            SortDataBooks(1);
                        }} style={Style.filterButton}>
                            <Text style={{
                                color:"white",
                                fontFamily:"GalanoAltBold",
                                fontSize:15,
                            }}>Autor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            SortDataBooks(3);
                        }} style={Style.filterButton}>
                            <Text style={{
                                color:"white",
                                fontFamily:"GalanoAltBold",
                                fontSize:15,
                            }}>Ano</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            SortDataBooks(2);
                        }} style={Style.filterButton}>
                            <Text style={{
                                color:"white",
                                fontFamily:"GalanoAltBold",
                                fontSize:15,
                            }}>Estrelas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            SortDataBooks(5);
                        }} style={Style.filterButton}>
                            <Text style={{
                                color:"white",
                                fontFamily:"GalanoAltBold",
                                fontSize:15,
                            }}>Editora</Text>
                        </TouchableOpacity>
                        <View style={{marginBottom:50,}}></View>
                    </View>
                </View>}
            <ScrollView style={{width:"100%",height:"100%",backgroundColor:"rgb(25,25,25)"}}>
                <FlatList
                    data={dataBooks}
                    renderItem={returnDataView}
                    extraData={refresh}
                    numColumns={4}
                    columnWrapperStyle={{justifyContent: "space-around"}}
                    contentContainerStyle={Style.flatListData}
                    keyExtracto={(item,index)=> item.id.toString()}
                    showsVerticalScrollIndicator={true}                    
                />
                <View style={{marginBottom:100,}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}