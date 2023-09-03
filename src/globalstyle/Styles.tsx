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
      color: "#000"
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
    passwordfield:{
      borderWidth: 1,
      marginTop: 12,
      marginHorizontal: 12,
      borderRadius: 6,
      padding: Platform.OS === "ios" ? 13 : null,
      color: "#000",
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center"
    },
    showtxt:{
      marginRight:20
    },
    errortxt:{
      color:"red",
      marginHorizontal:20,
      marginVertical:10,
      fontSize:18,
      fontWeight:"bold"
    }
  
  });