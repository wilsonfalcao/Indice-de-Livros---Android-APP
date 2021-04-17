import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    searchWelcome:{
      flex:1,
      backgroundColor:"rgb(0,0,0)",
    },
    searchBar:{
      flex:1,
      alignItems:"center",
      marginBottom:50,
    },
    filterView:{
      width:"40%",
      position:"absolute",
      backgroundColor:"rgb(0,0,17)",
      right:0,
      flexDirection:"column",
      zIndex:999,
    },
    filterButton:{                
      width:"100%",
      borderTopWidth:2,
      marginTop:12,
      borderColor:"rgba(255,255,255,0.1)",
      justifyContent:"center",
      padding:8,
    },
    filterTitle:{
      marginLeft:15,
      marginTop:12,
      color:"white",
      fontFamily:"GalanoAltBlack",
      fontSize:18,
    },
    screenHeader:{
      marginTop:40,
      marginBottom:10,
    },
    flatListData:{
      position:"relative",
      width:"100%",
      height:"120%",
      marginTop:20,
    },
    titleScreen2:{
      marginBottom:40,
      marginLeft:25,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBarFilters:{
      marginLeft:25,
      marginRight:20,
      justifyContent:"space-between",
      flexDirection:"row",
    },
  });

  export default styles;

