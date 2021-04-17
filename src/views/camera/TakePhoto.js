//Importação Recursos do Sistema
import React,{useState,useEffect,useRef} from 'react';
import {Text, View, SafeAreaView,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native';
import {Camera} from "expo-camera";
import { useFonts } from 'expo-font';
import { Modalize } from 'react-native-modalize';


//Importação de Recursos de Estilos e Fontes
import Style from "./CameraStyle";
import AppLoading from 'expo-app-loading';
import {FontsPath} from "../../fonts/InitializeFonts";

//Importação de Componentes Personalizados
import {PhotoCameraicon2,ZoomIconCamera,RightArrowicon} from "../../icons/ImagesSVG";


export default function TakePhoto({navigation}){

    const [CameraAuthorazation, setCameraAuthorazation] = useState(null);
    const refCamera = useRef(null);
    const [loadJSONData,setLoadJSONData] = useState(false);
    const [fontsLoaded] = useFonts(FontsPath);
    const modalizeRef = useRef(null);

    const ArrayExemplo = [ {id:1,name:"Allen Haldorn"},
                           {id:2,name:"Um conta de fadas sobre as melhores coisas"}, 
                           {id:3,name:"Um dia de Viver com Ela"}, 
                           {id:4,name:"Eddtion Fallen"},
                        ];

    const GetPermitionUserCamera = async () =>{
        const {status} = await Camera.requestPermissionsAsync();
        setCameraAuthorazation(status === "granted");
    }

    const TextFounds = ({data}) =>{
        return(
          <TouchableOpacity key={data.id} onPress={()=>{
            navigation.navigate("searchview",{termSearch:data.name,});}}
             style={Style.modalViewFlatlistData}>
              <View style={Style.buttonFoundTexts}>
                <Text style={{
                    color:"white",
                    textAlign:"center"
                    }}>{data.name.substring(0,18)}
                </Text>
              </View>
          </TouchableOpacity>
        );
    }
    
    const ViewListNames = ({item}) =>{
      return(
        <View>
          <TextFounds data={item}/>
        </View>
      );
    }

    const moveToSearch = ({data}) =>{
        navigation.navigate("searchview",{termSearch:data,});
    }
    
    useEffect(

        ()=>{
          GetPermitionUserCamera();
        },[]
  
    );


    if (!fontsLoaded) {
        return <AppLoading />;
    }


    if(!CameraAuthorazation){
        return(
          <View>
            <Text>Não Autorizado!</Text>
          </View>
        );
    }

    return(

        <SafeAreaView style={Style.cameraview}>
            <Camera 
                ref={refCamera}
                style={{flex:1}}
                type={Camera.Constants.Type.back}
                zoom={0}
                ratio={"16:9"}
                pictureSize={"1280x720"}
                autoFocus={true}
            >
        
                {loadJSONData && 
                <View style={Style.activityAfterPhoto}>

                    <ActivityIndicator animating={true} size="large" color="#0000ff"/>

                    <Text style={{fontSize:10,color:"#fff"}}>Analisando imagem...</Text>

                </View>
                }

                <View style={Style.container}>
                    <ZoomIconCamera width={"80%"} height={"80%"} fill="#ffff"/>
                    <Text style={Style.styleFontTitleCamera}>Aponte para o livro</Text>
                </View>

                <View style={Style.positionCameraButton}>

                    <TouchableOpacity onPress={()=>{navigation.goBack();}} style={Style.backButtonCamera}>
                        
                        <View style={{marginLeft:6,}}>
                            <RightArrowicon width={40} height={40} fill="#FFFF"/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={Style.buttonCamera}
                        onPress={()=>{
                            modalizeRef.current?.open();
                        }}
                    >
                        <View style={Style.buttonCamera2}>
                            <PhotoCameraicon2 width={30} height={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <Modalize
                ref={modalizeRef}
                snapPoint={200}
                modalHeight={200}
                >
                    <SafeAreaView style={{
                        width:"100%",
                        height:"100%",
                    }}>
                        <View style={Style.viewModalCameraTitle}>
                            <Text style={Style.viewModalTitle}>Procurar por</Text>
                        </View>
                        <FlatList
                            data={ArrayExemplo}
                            renderItem={ViewListNames}
                            numColumns={3}
                            contentContainerStyle={Style.modaViewFlalistContainer}
                            keyExtracto={(item,index)=>index.toString()}
                            showsVerticalScrollIndicator={true}               
                        />
                    </SafeAreaView>
                </Modalize>

            </Camera>
        </SafeAreaView >
    );
}