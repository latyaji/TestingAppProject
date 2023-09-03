import React, { useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity } from "react-native"
import { styles } from "./src/globalstyle/Styles";




const App = () => {
  const [allfileddata, setAllfielddata] = useState({
    name: '',
    email: ''
  })

  const [allfielderrors, setAllfielderror] = useState({
    nameerror: '',
    emailerror: ''
  })


  const handleAllerrors = (text, fieldname) => {

    let errors = {}
    if (fieldname == "name") {
      errors.nameerror = !text ? "Name field is required" : null;
    }
    else if (fieldname == "email") {
      errors.emailerror = !text ? "Email field is required" : null 
    }
    return errors
  }

  const handleInput = (text, fieldname) => {
    const valid = handleAllerrors(text, fieldname)

    setAllfielderror({ ...allfielderrors, ...valid })
    setAllfielddata({...allfileddata , [fieldname] : text})

  }

  const handleSubmit = () => {
    
    let submiterror = {}
    let errorset = false

    for(let i in allfileddata){
      const checkallfield = handleAllerrors(allfileddata[i],i)
      submiterror = {...submiterror , ...checkallfield }

      if(!allfileddata[i]){
        errorset = true
      }
    }

    setAllfielderror({...allfielderrors, ...submiterror})

    if(!errorset){
      console.log("data saved without errors",allfileddata);

      let storedata = []
      storedata = storedata.push(allfileddata)
      setAllfielddata({ ...allfileddata, ...storedata })
      console.log("allfileddataallfileddataallfileddataallfileddata=====",allfileddata);
      

      
    }
    
  }

  return (
    <View>
      <Text>Enter Your Name</Text>
      <TextInput
        style={styles.inputfield}
        placeholder="Enter Your Name"
        onChangeText={(text) => handleInput(text, fieldname = "name")}
        defaultValue={allfileddata.name}
      />
      {allfielderrors.nameerror ? <Text style={styles.errortxt}>{allfielderrors.nameerror}</Text> : null}

      <Text>Enter Your Email</Text>
      <TextInput
        style={styles.inputfield}
        placeholder="Enter Your Email"
        onChangeText={(text) => handleInput(text, fieldname = "email")}
        defaultValue={allfileddata.email}
      />
      {allfielderrors.emailerror ? <Text style={styles.errortxt}>{allfielderrors.emailerror}</Text> : null} 
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={handleSubmit}
      >
        <Text style={styles.buttontxt}>Submit</Text>
      </TouchableOpacity>

    </View>
  )
}

export default App

