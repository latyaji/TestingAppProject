// import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { styles } from './src/globalstyle/Styles'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// const App = () => {
//   const [allfielddata, setAllfielddata] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmpassword: ''
//   })

//   const [allfielderror, setAllfielderror] = useState({
//     nameerror: '',
//     emailerror: '',
//     phoneerror: '',
//     passworderror: '',
//     confirmpassworderror: ''
//   })

//   const [showpassword, setShowpassword] = useState(true)

//   const handleallerrors = (text, fieldname) => {
//     let allerrors = {}
//     if (fieldname == 'name') {
//       const charcter = /[^a-z]/gi
//       { allerrors.nameerror = !text ? "Name Field is required" : null }
//       if (text) {
//         { allerrors.nameerror = charcter.test(text) ? "numeric character not allowed" : null }

//       }
//     }

//     else if (fieldname == 'email') {
//       const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       { allerrors.emailerror = !text ? "Email Field is required" : null }
//       if (text) {
//         { allerrors.emailerror = !emailregex.test(text) ? "Email must be valid" : null }

//       }

//     }
//     else if (fieldname == 'phone') {
//       { allerrors.phoneerror = !text ? "Phone Field is required" : null }
//       if (text) {
//         { text.length != 10 ? allerrors.phoneerror = "Phone Field should be 10 character" : null }
//       }

//     }
//     else if (fieldname == 'password') {
//       const passwordregex = /^.{6}$/;
//       { allerrors.passworderror = !text ? "Password Field is required" : null }
//       if (text) {
//         { allerrors.passworderror = !passwordregex.test(text) ? "Password should be only 6 chanracter" : null }
//       }

//     }
//     else if (fieldname == 'confirmpassword') {
//       { allerrors.confirmpassworderror = !text ? "Confirm Password Field is required" : null }

//       if (text) {
//         allerrors.confirmpassworderror = text !== allfielddata.password ? "Confirm Password not matched with password" : null;
//       }

//     }
//     else {
//       console.log("data successfully save");

//     }
//     return allerrors

//   }

//   const handleInput = (text, fieldname) => {
//     const isValid = handleallerrors(text, fieldname)

//     setAllfielderror({ ...allfielderror, ...isValid })
//     setAllfielddata({ ...allfielddata, [fieldname]: text })

//   }

//   const handleSignupbtn = async () => {
//     let submittederror = {}
//     let errorset = false

//     for (let i in allfielddata) {
//       const checkallfield = handleallerrors(allfielddata[i], i)
//       submittederror = { ...submittederror, ...checkallfield }
//       if (!allfielddata[i]) {
//         errorset = true
//       }
//     }
//     setAllfielderror({ ...allfielderror, ...submittederror })

//     if (!errorset) {

//       try {
//         // await AsyncStorage.clear()
//         const data = await AsyncStorage.getItem('user')
//         if (data) {
//           const olddata = JSON.parse(data)
//           await AsyncStorage.setItem('user', JSON.stringify([...olddata, allfielddata]))
//         }
//         else {
//           await AsyncStorage.setItem('user', JSON.stringify([allfielddata]))
//         }
//         const getalldata = await AsyncStorage.getItem('user')
//         console.log("check data", getalldata);

//         setAllfielddata({
//           name: '',
//           email: '',
//           phone: '',
//           password: '',
//           confirmpassword: ''
//         })

//         setAllfielderror({
//           nameerror: '',
//           emailerror: '',
//           phoneerror: '',
//           passworderror: '',
//           confirmpassworderror: ''
//         })
//       }

//       catch (error) {
//         console.log("error", error)
//       }
//     }
//   }


//   return (
//     <ScrollView>
//       <Text style={styles.headertxt}>Sign Up Form</Text>
//       <Text style={styles.labeltxt}>Enter name</Text>
//       <TextInput
//         placeholder='Enter Your name'
//         style={styles.inputfield}
//         onChangeText={(text) => handleInput(text, fieldname = "name")}
//         defaultValue={allfielddata.name}
//       />
//       {allfielderror.nameerror ? <Text style={styles.errortxt}>{allfielderror.nameerror}</Text> : null}

//       <Text style={styles.labeltxt}>Enter Email</Text>
//       <TextInput
//         placeholder='Enter Your Email'
//         style={styles.inputfield}
//         onChangeText={(text) => handleInput(text, fieldname = "email")}
//         defaultValue={allfielddata.email}
//       />
//       {allfielderror.emailerror ? <Text style={styles.errortxt}>{allfielderror.emailerror}</Text> : null}

//       <Text style={styles.labeltxt}>Enter Phone </Text>
//       <TextInput
//         placeholder='Enter Your Phone'
//         maxLength={10}
//         style={styles.inputfield}
//         keyboardType={'phone-pad'}
//         onChangeText={(text) => handleInput(text, fieldname = "phone")}
//         defaultValue={allfielddata.phone}
//       />
//       {allfielderror.phoneerror ? <Text style={styles.errortxt}>{allfielderror.phoneerror}</Text> : null}

//       <Text style={styles.labeltxt}>Enter Password</Text>
//       <View
//         style={styles.passwordfield}>
//         <TextInput
//           placeholder='Enter Your Password'
//           secureTextEntry={showpassword}
//           onChangeText={(text) => handleInput(text, fieldname = "password")}
//           defaultValue={allfielddata.password}
//         />
//         <TouchableOpacity
//           onPress={() => setShowpassword(!showpassword)}
//         >
//           <Text style={styles.showtxt}>Show</Text>
//         </TouchableOpacity>
//       </View>

//       {allfielderror.passworderror ? <Text style={styles.errortxt}>{allfielderror.passworderror}</Text> : null}

//       <Text style={styles.labeltxt}>Enter Confirm Password</Text>

//       <View
//         style={styles.passwordfield}>
//         <TextInput
//           placeholder='Enter Your Confirm Password'
//           secureTextEntry={showpassword}
//           onChangeText={(text) => handleInput(text, fieldname = "confirmpassword")}
//           defaultValue={allfielddata.confirmpassword}
//         />
//         <TouchableOpacity
//           onPress={() => setShowpassword(!showpassword)}
//         >
//           <Text style={styles.showtxt}>Show</Text>
//         </TouchableOpacity>
//       </View>
//       {allfielderror.confirmpassworderror ? <Text style={styles.errortxt}>{allfielderror.confirmpassworderror}</Text> : null}
//       <TouchableOpacity
//         onPress={handleSignupbtn}
//         style={styles.buttoncontainer}
//       >
//         <Text style={styles.buttontxt}>Sign Up</Text>
//       </TouchableOpacity>
//     </ScrollView>

//   )
// }

// export default App






import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { styles } from "./src/globalstyle/Styles";

import AsyncStorage from "@react-native-async-storage/async-storage";


const App = () => {

  const [alldata, setAlldata] = useState({
    name: '',
    email: ''
    
  })

  const [alldataerror, setAlldataerror] = useState({
    nameerror: '',
    emailerror: ''
  })

  const handleerrors = (text, fieldname) => {
    let errors = {}
    if (fieldname == "name") {
      { errors.nameerror = !text ? "Name field is required" : null }
    }

    else if (fieldname == "email") {
      { errors.emailerror = !text ? "Email field is required" : null }
    }
    return errors

  }

  const handleInput = (text, fieldname) => {

    const isValid = handleerrors(text, fieldname)

    setAlldataerror({ ...alldataerror, ...isValid })
    setAlldata({ ...alldata, [fieldname]: text })

  }

  const handleSubmit = async() => {

    let submiterror = {}
    let errorset = false

    for (let i in alldata) {
      const errorcheck = handleerrors(alldata[i], i)
      submiterror = { ...submiterror, ...errorcheck }
      
      if (!alldata[i]) {
        errorset = true
      }

    }
    setAlldataerror({ ...alldataerror, ...submiterror })

    if (!errorset) {
      
      try {
        const olddatacheck = await AsyncStorage.getItem('user')
        
        if(olddatacheck){

          const convertdataparse = JSON.parse(olddatacheck)
          await AsyncStorage.setItem('user',JSON.stringify([...convertdataparse , ...alldata]))
         
        }
        else{
          await AsyncStorage.setItem('user',JSON.stringify([alldata]))
        }

        
      } catch (error) {
        
      }

    }
  }


  return (
    <View>
      <Text style={styles.labeltxt}>Enter Your Name</Text>
      <TextInput
        placeholder="Enter Your name"
        style={styles.inputfield}
        defaultValue={alldata.name}
        onChangeText={(text) => handleInput(text, fieldname = "name")}
      />
      {alldataerror.nameerror ? <Text style={styles.errortxt}>{alldataerror.nameerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Your Email</Text>
      <TextInput
        placeholder="Enter Your email"
        style={styles.inputfield}
        defaultValue={alldata.email}
        onChangeText={(text) => handleInput(text, fieldname = "email")}
      />
      {alldataerror.emailerror ? <Text style={styles.errortxt}>{alldataerror.emailerror}</Text> : null}


      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.buttoncontainer}
      >
        <Text style={styles.buttontxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}


export default App



