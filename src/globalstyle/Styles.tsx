import { StyleSheet, Platform } from 'react-native'

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
    paddingVertical: 26,
    marginTop: Platform.OS === "ios" ? 25 : null,
  },
  labeltxt: {
    marginTop: 12,
    color: "#000",
    fontSize: 20,
  },
  inputfield: {
    borderWidth: 1,
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 6,
    padding: Platform.OS === "ios" ? 13 : null,
    color: "#000",
    paddingLeft: 12,
    marginBottom: 20,
    fontSize: 16
  },
  buttoncontainer: {
    backgroundColor: "#E3F4F4",
    padding: 8,
    borderRadius: 12
  },

  buttontxt: {
    color: "#116A7B",
    alignSelf: "center"
  },

  listcontainer: {
    borderBottomWidth: .8,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: Platform.OS === "ios" ? 6 : 5,
    marginHorizontal:Platform.OS === 'ios' ? 14 : 4,
    flex: 1,
    flexWrap: "wrap",

  },
  cardconatiner: {
    borderWidth: 1,
    backgroundColor: "#E3F4F4",
    padding: 12,
    margin: 12,
    borderRadius: 12,

  },
  txt: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold"
  },
  tittletxt: {
    fontSize: 27,
    color: "#000",
    fontWeight: "bold"
  },
  overviewtxt: {
    fontSize: 19,
  },
  viewmorebuttoncontainer: {
    backgroundColor: "green",
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    padding: 12,
    marginTop: 20,
    borderRadius: 12,
    marginBottom:12
  },
  viewmorebuttontxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },

});