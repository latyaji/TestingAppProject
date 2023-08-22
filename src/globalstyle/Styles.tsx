import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertxt: {
    fontSize: 36,
    paddingHorizontal: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#116D6E",
    paddingVertical: 26
  },
  buttoncontainer: {
    backgroundColor: "#214151",
    padding: 12,
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 12,
    marginBottom: 30
  },
  buttontxt: {
    fontSize: 22,
    color: "#fff",
    alignSelf: "center"
  },
  titletxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",

  },
  titleemailtxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",

  },

  img: {
    width: 80,
    height: 100,
    borderRadius:20
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "orange"
  },
  shareconatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 12,
    padding: 12,
    borderRadius:12
  
  }

});