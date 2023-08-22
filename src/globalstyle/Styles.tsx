import {StyleSheet,Platform} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    headertxt: {
      fontSize: 36,
      paddingHorizontal:20,
      fontWeight: "bold",
      alignSelf: "center",
      color: "#116D6E",
      paddingVertical:26
    },
    headercontainer:{
        backgroundColor:"orange"
    },
    labeltxt: {
      marginTop: 12,
      color: "#000",
      fontSize: 18,
      paddingHorizontal: 12,
      fontWeight: "bold"
    },
    inputfield: {
      borderWidth: 1,
      marginTop: 12,
      marginHorizontal: 12,
      borderRadius: 6,
      padding: Platform.OS === "ios" ? 13 : null,
      color: "#000",
      paddingLeft:12
    },
    passwordinputfield:{
      borderWidth: 1,
      marginTop: 12,
      marginHorizontal: 10,
      borderRadius: 6,
      padding: Platform.OS === "ios" ? 12 : null,
      color: "#000",
      flexDirction:"row",
      justifyContent:"space-between",
    },
  
    buttoncontainer: {
      backgroundColor: "#214151",
      padding: 12,
      width: "80%",
      alignSelf: "center",
      marginTop: 20,
      borderRadius: 12,
      marginBottom:30
    },
    refecebuttoncontainer: {
      backgroundColor: "#214151",
      padding: 12,
      width: "30%",
      alignSelf: "flex-end",
      marginTop: 20,
      borderRadius: 12,
      marginRight:20
    },
    buttontxt: {
      fontSize: 22,
      color: "#fff",
      alignSelf: "center"
    },
    titletxt:{
      fontSize:15,
      fontWeight:"bold",
      color:"#000",

    },
    titleemailtxt:{
      fontSize:20,
      fontWeight:"bold",
      color:"#000",

    },
    apidatacontainer:{
      // flexDirection:"row",
      borderWidth:1,
      padding:10,
      marginRight:20,
      borderRadius:12,
      justifyContent:"center",
      alignSelf:"center",
      marginHorizontal:20,
      width:"100%"
    },
    alldetailcontainer:{
      padding:12,
      borderWidth:1,
      margin:12,
      borderRadius:12,
     
    },
    itemalldetailstxt:{
      fontSize:26,
      color:"green",
      alignSelf:"center",
      fontWeight:"bold",
      marginTop:20,
      

    },
    bodytxt:{
      fontSize:18,
      fontWeight:"500"
    },
    errortxt:{
      color:"red",
      paddingLeft:20,
      paddingTop:10,
      fontSize:16
    },
    showtxt:{
      fontWeight:"bold",
      color:"#000",
      paddingRight:12
    },
    passwordfield:{
      borderWidth:1,
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center",
     
      marginTop: 12,
      marginHorizontal: 12,
      borderRadius: 6,
      padding: Platform.OS === "ios" ? 13 : null,
      color: "#000",
      paddingLeft:12
    },
    mobileimages:{
      width:100,
      height:100
    },
    cardtxt:{
      fontSize:25,
      color:"#000",
      fontWeight:"bold",
      
    },
    cartcontainer:{
      // flex:1,
      justifyContent:"center",
      alignItems:"center",
      borderWidth:1,
      margin:20,
      padding:20
    },
    img:{
      width:100,
      height:80
    },
    icon:{
      width:30,
      height:30,
      tintColor:"orange"
    }
  
  });