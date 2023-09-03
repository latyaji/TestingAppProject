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
//       console.log("nooo erroersss", allfielddata)
//     }
//   }

//   useEffect(() => {
//     fetchData()

//   }, []);

//   const fetchData = async () => {
//     try {
//       const data = await AsyncStorage.getItem('otherUserData');
//       if (data) {
//         const getdata = JSON.parse(data);
//         await AsyncStorage.setItem('otherUserData', JSON.stringify({ ...getdata, allfielddata }));
//       } else {
//         await AsyncStorage.setItem('otherUserData', JSON.stringify(allfielddata));
//       }
//       // const alldata = await AsyncStorage.getItem('otherUserData');
//       // console.log("allldata", alldata);
//     } catch (error) {
//       console.error('Error loading data:', error);
//     }
//   };

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
//       />
//       {allfielderror.phoneerror ? <Text style={styles.errortxt}>{allfielderror.phoneerror}</Text> : null}

//       <Text style={styles.labeltxt}>Enter Password</Text>
//       <View
//         style={styles.passwordfield}>
//         <TextInput
//           placeholder='Enter Your Password'
//           secureTextEntry={showpassword}
//           onChangeText={(text) => handleInput(text, fieldname = "password")}
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



import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './src/globalstyle/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const [allfielddata, setAllfielddata] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: ''
  })

  const [allfielderror, setAllfielderror] = useState({
    nameerror: '',
    emailerror: '',
    phoneerror: '',
    passworderror: '',
    confirmpassworderror: ''
  })

  const [showpassword, setShowpassword] = useState(true)

  const handleallerrors = (text, fieldname) => {
    let allerrors = {}
        if (fieldname == 'name') {
          const charcter = /[^a-z]/gi
          { allerrors.nameerror = !text ? "Name Field is required" : null }
          if (text) {
            { allerrors.nameerror = charcter.test(text) ? "numeric character not allowed" : null }
    
          }
        }
    
        else if (fieldname == 'email') {
          const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          { allerrors.emailerror = !text ? "Email Field is required" : null }
          if (text) {
            { allerrors.emailerror = !emailregex.test(text) ? "Email must be valid" : null }
    
          }
    
        }
        else if (fieldname == 'phone') {
          { allerrors.phoneerror = !text ? "Phone Field is required" : null }
          if (text) {
            { text.length != 10 ? allerrors.phoneerror = "Phone Field should be 10 character" : null }
          }
    
        }
        else if (fieldname == 'password') {
          const passwordregex = /^.{6}$/;
          { allerrors.passworderror = !text ? "Password Field is required" : null }
          if (text) {
            { allerrors.passworderror = !passwordregex.test(text) ? "Password should be only 6 chanracter" : null }
          }
    
        }
        else if (fieldname == 'confirmpassword') {
          { allerrors.confirmpassworderror = !text ? "Confirm Password Field is required" : null }
    
          if (text) {
            allerrors.confirmpassworderror = text !== allfielddata.password ? "Confirm Password not matched with password" : null;
          }
    
        }
        else {
          console.log("data successfully save");
    
        }
        return allerrors
  }

  const handleInput = (text, fieldname) => {
    const isValid = handleallerrors(text, fieldname)

    setAllfielderror({ ...allfielderror, ...isValid })
    setAllfielddata({ ...allfielddata, [fieldname]: text })

    // Store the user data in AsyncStorage whenever there's a change
    storeUserData(allfielddata)
  }

  const handleSignupbtn = async () => {
    let submittederror = {}
    let errorset = false

    for (let i in allfielddata) {
      const checkallfield = handleallerrors(allfielddata[i], i)
      submittederror = { ...submittederror, ...checkallfield }
      if (!allfielddata[i]) {
        errorset = true
      }
    }
    setAllfielderror({ ...allfielderror, ...submittederror })

    if (!errorset) {
      console.log("no errors", allfielddata)
    }
  }

  const storeUserData = async (data) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(data))
    } catch (error) {
      console.error('Error storing data:', error)
    }
  }

  const fetchUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData')
      if (data) {
        const userData = JSON.parse(data)
        setAllfielddata(userData)
      }
    } catch (error) {
      console.error('Error loading data:', error)
    }
  }

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData()
  }, [])

  return (
    <ScrollView>
     <Text style={styles.headertxt}>Sign Up Form</Text>
       <Text style={styles.labeltxt}>Enter name</Text>
       <TextInput
        placeholder='Enter Your name'
        style={styles.inputfield}
        onChangeText={(text) => handleInput(text, fieldname = "name")}
        defaultValue={allfielddata.name}
      />
      {allfielderror.nameerror ? <Text style={styles.errortxt}>{allfielderror.nameerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Email</Text>
      <TextInput
        placeholder='Enter Your Email'
        style={styles.inputfield}
        onChangeText={(text) => handleInput(text, fieldname = "email")}
        defaultValue={allfielddata.email}
      />
      {allfielderror.emailerror ? <Text style={styles.errortxt}>{allfielderror.emailerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Phone </Text>
      <TextInput
        placeholder='Enter Your Phone'
        maxLength={10}
        style={styles.inputfield}
        keyboardType={'phone-pad'}
        onChangeText={(text) => handleInput(text, fieldname = "phone")}
        defaultValue={allfielddata.phone}
      />
      {allfielderror.phoneerror ? <Text style={styles.errortxt}>{allfielderror.phoneerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Password</Text>
      <View
        style={styles.passwordfield}>
        <TextInput
          placeholder='Enter Your Password'
          secureTextEntry={showpassword}
          onChangeText={(text) => handleInput(text, fieldname = "password")}
          defaultValue={allfielddata.password}
        />
        <TouchableOpacity
          onPress={() => setShowpassword(!showpassword)}
        >
          <Text style={styles.showtxt}>Show</Text>
        </TouchableOpacity>
      </View>

      {allfielderror.passworderror ? <Text style={styles.errortxt}>{allfielderror.passworderror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Confirm Password</Text>

      <View
        style={styles.passwordfield}>
        <TextInput
          placeholder='Enter Your Confirm Password'
          secureTextEntry={showpassword}
          onChangeText={(text) => handleInput(text, fieldname = "confirmpassword")}
          defaultValue={allfielddata.confirmpassword}
        />
        <TouchableOpacity
          onPress={() => setShowpassword(!showpassword)}
        >
          <Text style={styles.showtxt}>Show</Text>
        </TouchableOpacity>
      </View>
      {allfielderror.confirmpassworderror ? <Text style={styles.errortxt}>{allfielderror.confirmpassworderror}</Text> : null}
      <TouchableOpacity
        onPress={handleSignupbtn}
        style={styles.buttoncontainer}
      >
        <Text style={styles.buttontxt}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default App
