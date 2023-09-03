import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from "./src/globalstyle/Styles";
import { all } from "axios";


const App = () => {

  const [alldata, setAlldata] = useState({
    name: '',

  })

  const [errordata, setErrors] = useState({
    nameerror: ''
  })

  const handleerrors = (text, fieldname) => {
    let errors = {}
    if (fieldname == "name") {
      errors.nameerror = !text ? "Name Field is required" : null
    }
    return errors

  }
  const handleInput = (text, fieldname) => {

    const isValid = handleerrors(text, fieldname)

    setErrors({ ...errordata, ...isValid })
    setAlldata({ ...alldata, [fieldname]: text })

  }

  const handleSubmit = () => {
    let submiterrors = {}
    let errorset = false

    for (let i in alldata) {
      const checkerrors = handleerrors(alldata[i], [i])
      submiterrors = { ...submiterrors, ...checkerrors }
      if (!alldata[i]) {
        errorset = true
      }
    }

    setErrors({ ...errordata, ...submiterrors })

    if (!errorset) {
      console.log("dadadadadadadadad", alldata)
    }
  }
  return (
    <View>
      <Text>Enter name</Text>
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={(text) => handleInput(text, fieldname = "name")}
        style={styles.inputfield}
      />
      {errordata.nameerror ? <Text style={styles.errortxt}>{errordata.nameerror}</Text> : null}
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.buttoncontainer}
      >
        <Text
          style={styles.buttontxt}
        >Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App