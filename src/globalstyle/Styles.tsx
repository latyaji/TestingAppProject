import {StyleSheet,Platform} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30
    },
    headertxt: {
      fontSize: 26,
      fontWeight: "bold",
      alignSelf: "center",
      color: "#116D6E",
      paddingVertical:26
    },
    labeltxt: {
      marginTop: 12,
      color: "#000",
      fontSize: 20,
      // paddingHorizontal: 12,
      fontWeight: "bold"
    },
    inputfield: {
      borderWidth: 1,
      marginTop: 12,
      marginHorizontal: 12,
      borderRadius: 6,
      padding: Platform.OS === "ios" ? 13 : null,
      color: "#000",
      paddingLeft:12,
      marginBottom:20
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
      padding: 5,
      // width: "40%",
      borderRadius: 12
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
      color:"#000"

    },
    apidatacontainer:{
      flexDirection:"row",
      flexWrap:"wrap",
      borderWidth:1,
      padding:12,
      margin:12,
      borderRadius:12
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
    listcontainer:{
      borderBottomWidth:1,
      justifyContent:"space-between",
      flexDirection:"row",
      padding:5,
      flexWrap:"wrap"
    }
  
  });