import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  cardconatiner:{
    alignItems:"center",
    margin:12,
    borderWidth:1,
    padding:12,
    marginBottom:50
  },
  cardimg: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom:20
  },
  headtxt:{
    fontSize:20,
    color:"#000",
    fontWeight:"bold"
  },
  normaltxt:{
    fontSize:18
  },
  headerContainer:{
    backgroundColor:"orange",
    padding:12
  },
  headerTxt:{
    fontSize:30,
    textAlign:"right",
    marginRight:20,
    fontWeight:"bold",
    color:"#000"
  },
  apitxt :{
    color:"green",
    fontSize:30,
    fontWeight:"bold"
  }
 
});