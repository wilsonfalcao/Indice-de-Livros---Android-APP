//Sistema
import React from 'react';
import { Dimensions, View } from 'react-native';

//Navegação
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icons
import {Homeicon,Settingicon,Bookicon} from "../../icons/ImagesSVG"

//Views 
import {HomeView,SettingsView,EstanteView,SearchView} from "../../views/index";
import StackHome from "./StackHome";

export default function TabNavegation() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                iconStyle:{

                    marginBottom:-12,

                },
                labelStyle:{
                    fontSize:14,
                    alignItems:"center",
                    margin:6,
                    color:"rgb(102,102,102)",
                    fontFamily:"SimpleFont",
                },
                style:{
                    position:"absolute",
                    bottom:10,
                    borderRadius:10,
                    left:(Dimensions.get("window").width - (Dimensions.get("window").width - 50))/2,
                    flexDirection:"row",
                    width:Dimensions.get("window").width - 50,
                    height:70,
                    backgroundColor: "white",
                }
            }}
        
        >
            <Tab.Screen 
                name="Home" 
                component={StackHome} 
                options={()=>({
                    tabBarIcon:({focused})=>{

                        return <Homeicon 
                                    width={30} 
                                    height={30} 
                                    fill={focused ? "#000" : "rgb(102,102,102)"}
                                />

                    }
                })}
            />

            <Tab.Screen 
                name="Estante"
                component={EstanteView}
                options={()=>({
                    tabBarIcon:({focused})=>{

                        return (
                                <View style={{
                                                width: 70,
                                                height:70,
                                                borderRadius: 70,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderColor:"rgb(236,236,236)",
                                                borderWidth:4,
                                                backgroundColor:"rgb(236,236,236)",
                                                marginTop:-40,
                                            }}
                                >
                                    <View style={{
                                                    backgroundColor:"white",
                                                    width:58,
                                                    height:58,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius:50,
                                                    marginBottom:3,
                                                }}
                                    >
                                        <Bookicon 
                                            width={30} 
                                            height={30} 
                                            fill={focused ? "#000" : "rgb(102,102,102)"}
                                        />

                                    </View>
                                    
                                </View>
                                );

                    }
                })}
            />

            <Tab.Screen 
                name="Configuração"
                component={SettingsView}
                options={()=>({
                    tabBarIcon:({focused})=>{

                        return <Settingicon 
                                    width={30} 
                                    height={30} 
                                    fill={focused ? "#000" : "rgb(102,102,102)"}
                                />

                    }
                })}
            />
        </Tab.Navigator>

    );
}