import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    cameraview:{
      flex:1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    positionCameraButton:{
      flexDirection:"row",
      position:"absolute",
      bottom:20,
      right:"40%",
    },
    buttonCamera:{
      borderRadius:73,
      width:73,
      height:73,
      borderStyle: 'solid',
      borderWidth: 3,
      borderColor:"rgb(255,255,255)",
    },
    backButtonCamera:{
      marginRight:70,
      width:73,
      height:73,
      borderBottomRightRadius:60,
      borderTopRightRadius:60,
      borderColor:"rgba(0,0,0,0.3)",
      borderStyle: 'solid',
      borderWidth: 3,
      backgroundColor:"rgba(0,0,0,0.3)",
      alignContent:"center",
      justifyContent:"center",
    },
    viewModalCamera:{
      flex:1,
      height:300,
      width:"100%",
    },
    viewModalTitle:{
      fontFamily:"GalanoAltBold",
      fontSize:25,
      color:"rgb(39,49,58)",
    },
    viewModalCameraTitle:{
      flexDirection:"row",
      marginTop:6,
      marginLeft:10,
    },
    modalViewFlatlistData:{
      backgroundColor:"rgb(39, 49, 58)",
      marginRight:10,
      padding:6,
      width:100,
      height:65,
      marginBottom:10,
      borderRadius:10,
    },
    modaViewFlalistContainer:{
      marginTop:10,
      marginLeft:10,
      justifyContent:"center",
      flexDirection: 'column',
    },
    buttonFoundTexts:{
      justifyContent:"center",
      alignContent:"center",
      backgroundColor:"rgb(39, 49, 58)",
      borderColor:"white",
      padding:6,
      width:"100%",
      height:"97%",
      borderWidth:2,
      borderRadius:10,
    },
    buttonCamera2:{
      marginLeft:3.5,
      alignItems:"center",
      justifyContent:"center",
      marginTop:3.5,
      borderRadius:60,
      width:60,
      height:60,
      backgroundColor:"rgb(236,236,236)",
    },
    styleFontTitleCamera:{
      fontFamily:"GalanoAltBlack",
      marginTop:-109,
      fontWeight:"bold",
      color:"white",
    },
    activityAfterPhoto:{
      flex: 1,
      width:"100%",
      height:"100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"rgba(0,0,0,0.7)",
      position:"absolute",
      zIndex:999,
    },
  });

  export default styles;

