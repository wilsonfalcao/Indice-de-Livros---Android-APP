import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({

    HomeView:{
      flex:1,
      backgroundColor:"rgb(236,236,236)",
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleHome:{
      fontFamily:"GalanoAltBold",
      fontSize:30,
      color:"white",
    },
    bookBox:{
      width: Dimensions.get("window").width > 360 ? "86%" : "78%",
      height: Dimensions.get("window").height > 700 ? "78%" : "73%",
      marginTop:10,
      borderRadius:20,
      backgroundColor:"#000",
      alignContent:"center",
      alignItems:"center",
    },
    shadowBookMain:{
      width: "100%",
      height: "100%",
    },
    flatlistView:{
      width:Dimensions.get("window").width-80,
      height:Dimensions.get("window").height-230,
    },
    flatlistPhoto:{
      borderRadius:20,
      width:"100%",
      height:"100%",
    },
    flatlistRatingStar:{
      marginLeft:5,
      color:"white",
      fontSize:20,
      fontFamily:"GalanoAltBold",
    },
    flatlistBookTitle:{
      color:"white",
      fontSize:16,
      fontFamily:"GalanoAltBold"

    },
    flatlistBookAuthor:{
      color:"white",
      fontSize:13,
      fontFamily:"GalanoAltExtraLight"
    },
  });

  export default styles;

