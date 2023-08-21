// import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import { styles } from '../../globalstyle/Styles'
// import AsyncStorage from '@react-native-async-storage/async-storage';


// export const Signup = ({ navigation }) => {
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
//         { allerrors.confirmpassworderror = text !== allfielddata.password ? "Confirm Password not matched with password" : null }
//       }
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
//         //  await AsyncStorage.clear();
//         const savedUserJSON = await AsyncStorage.getItem('user');
//         if (savedUserJSON) {
//           const getdata = JSON.parse(savedUserJSON) // ...[{},{},{}] // {},{},{}   
//          // console.log("getdata", getdata);
//           await AsyncStorage.setItem('user', JSON.stringify([...getdata, allfielddata]));    //[...[{},{},{}],allfielddata] ,//[{},{},{},{}]
//         }
//         else {
//           await AsyncStorage.setItem('user', JSON.stringify([allfielddata]));
//         }
//         setAllfielddata({
//           name: '',
//           email: '',
//           phone: '',
//           password: '',
//           confirmpassword: ''
//         });
//         // Clear field errors
//         setAllfielderror({
//           nameerror: '',
//           emailerror: '',
//           phoneerror: '',
//           passworderror: '',
//           confirmpassworderror: ''
//         });

//         navigation.navigate('Login');

//       } catch (error) {
//         console.error('Error saving user data:', error);
//       }
//     }
//   }

//   return (
// <ScrollView>
//   <Text style={styles.headertxt}>Sign Up Form</Text>
//   <Text style={styles.labeltxt}>Enter name</Text>
//   <TextInput
//     placeholder='Enter Your name'
//     style={styles.inputfield}
//     onChangeText={(text) => handleInput(text, fieldname = "name")}
//     defaultValue={allfielddata.name}
//   />
//   {allfielderror.nameerror ? <Text style={styles.errortxt}>{allfielderror.nameerror}</Text> : null}

//   <Text style={styles.labeltxt}>Enter Email</Text>
//   <TextInput
//     placeholder='Enter Your Email'
//     style={styles.inputfield}
//     onChangeText={(text) => handleInput(text, fieldname = "email")}
//     defaultValue={allfielddata.email}
//   />
//   {allfielderror.emailerror ? <Text style={styles.errortxt}>{allfielderror.emailerror}</Text> : null}

//   <Text style={styles.labeltxt}>Enter Phone </Text>
//   <TextInput
//     placeholder='Enter Your Phone'
//     maxLength={10}
//     style={styles.inputfield}
//     keyboardType={'phone-pad'}
//     defaultValue={allfielddata.phone}
//     onChangeText={(text) => handleInput(text, fieldname = "phone")}
//   />
//   {allfielderror.phoneerror ? <Text style={styles.errortxt}>{allfielderror.phoneerror}</Text> : null}

//   <Text style={styles.labeltxt}>Enter Password</Text>
//   <View
//     style={styles.passwordfield}>
//     <TextInput
//       placeholder='Enter Your Password'
//       secureTextEntry={showpassword}
//       defaultValue={allfielddata.password}
//       onChangeText={(text) => handleInput(text, fieldname = "password")}
//     />
//     <TouchableOpacity
//       onPress={() => setShowpassword(!showpassword)}
//     >
//       <Text style={styles.showtxt}>Show</Text>
//     </TouchableOpacity>
//   </View>

//   {allfielderror.passworderror ? <Text style={styles.errortxt}>{allfielderror.passworderror}</Text> : null}

//   <Text style={styles.labeltxt}>Enter Confirm Password</Text>

//   <View
//     style={styles.passwordfield}>
//     <TextInput
//       placeholder='Enter Your Confirm Password'
//       secureTextEntry={showpassword}
//       defaultValue={allfielddata.confirmpassword}
//       onChangeText={(text) => handleInput(text, fieldname = "confirmpassword")}
//     />
//     <TouchableOpacity
//       onPress={() => setShowpassword(!showpassword)}
//     >
//       <Text style={styles.showtxt}>Show</Text>
//     </TouchableOpacity>
//   </View>
//   {allfielderror.confirmpassworderror ? <Text style={styles.errortxt}>{allfielderror.confirmpassworderror}</Text> : null}
//   <TouchableOpacity
//     onPress={handleSignupbtn}
//     style={styles.buttoncontainer}
//   >
//     <Text style={styles.buttontxt}>Sign Up</Text>
//   </TouchableOpacity>
// </ScrollView>

//   )
// }



import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../globalstyle/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const Signup = () => {
  const [passwordvisible, setPasswordvisible] = useState(true)

  const [allfielddata, setAllfielddata] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: ''
  })

  const [allfilederror, setAllfielderror] = useState({
    nameerror: '',
    emailerror: '',
    phoneerror: '',
    passworderror: '',
    cpassworderror: ''
  })

  const handleerrors = (text, filedname) => {
    const errorset = {}
    if (filedname == 'name') {
      const charcter = /[^a-z]/gi
      { errorset.nameerror = !text ? 'Name Field is Required' : null }
      if (text) {
        { errorset.nameerror = charcter.test(text) ? "Numeric letter not allowed" : null }
      }
    }
    else if (filedname == 'email') {
      const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      { errorset.emailerror = !text ? 'Email Field is Required' : null }
      if (text) {
        { errorset.emailerror = !emailregex.test(text) ? 'Email not valid' : null }

      }
    }
    else if (filedname == 'phone') {
      { errorset.phoneerror = !text ? 'Phone Field is Required' : null }
    }
    else if (filedname == 'password') {
      { errorset.passworderror = !text ? 'Password Field is Required' : null }
    }
    else if (filedname == 'cpassword') {
      { errorset.cpassworderror = !text ? 'Confirm password Field is Required' : null }
      if (text) {
        { errorset.cpassworderror = allfielddata.password != text ? 'Confirm password not match' : null }

      }
    }
    return errorset
  }

  const handleInput = (text, filedname) => {
    const isValid = handleerrors(text, filedname)
    setAllfielderror({ ...allfilederror, ...isValid })
    setAllfielddata({ ...allfielddata, [filedname]: text })
  }

  const handleSubmit = async () => {
    let submiterror = {}
    let seterror = false

    for (let i in allfielddata) {
      const checkallfielderror = handleerrors(allfielddata[i], i)
      submiterror = { ...submiterror, ...checkallfielderror }
      if (!allfielddata[i]) {
        seterror = true
      }
    }
    setAllfielderror({ ...allfilederror, ...submiterror })
    if (!seterror) {
      // console.log("data submitted",allfielddata);
      try {
        const storedata = await AsyncStorage.getItem('formdata')
        if (storedata) {
          const keepnewdata = JSON.parse(storedata)          
          await AsyncStorage.setItem('formdata', JSON.stringify([...keepnewdata, allfielddata]))

        }
        else {
          const savedata = await AsyncStorage.setItem('formdata', JSON.stringify([allfielddata]))
          console.log("savedata",savedata);
          
        }

      } catch (error) {
        console.log("error", error);

      }
    }

  }

  return (
    <ScrollView>
      <Text style={styles.headertxt}>Sign Up Form</Text>
      <Text style={styles.labeltxt}>Enter name</Text>
      <TextInput
        placeholder='Enter Your name'
        style={styles.inputfield}
        defaultValue={allfielddata.name}
        onChangeText={(text) => handleInput(text, filedname = "name")}
      />
      {allfilederror.nameerror ? <Text style={styles.errortxt}>{allfilederror.nameerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Email</Text>
      <TextInput
        placeholder='Enter Your Email'
        style={styles.inputfield}
        defaultValue={allfielddata.email}
        onChangeText={(text) => handleInput(text, filedname = "email")}
      />
      {allfilederror.emailerror ? <Text style={styles.errortxt}>{allfilederror.emailerror}</Text> : null}
      <Text style={styles.labeltxt}>Enter Phone </Text>
      <TextInput
        placeholder='Enter Your Phone'
        maxLength={10}
        style={styles.inputfield}
        keyboardType={'phone-pad'}
        defaultValue={allfielddata.phone}
        onChangeText={(text) => handleInput(text, filedname = "phone")}

      />
      {allfilederror.phoneerror ? <Text style={styles.errortxt}>{allfilederror.phoneerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Password</Text>
      <View
        style={styles.passwordfield}>
        <TextInput
          placeholder='Enter Your Password'
          secureTextEntry={passwordvisible}
          defaultValue={allfielddata.password}
          onChangeText={(text) => handleInput(text, filedname = "password")}

        />

        <TouchableOpacity
          onPress={() => setPasswordvisible(!passwordvisible)}
        >
          <Text style={styles.showtxt}>Show</Text>
        </TouchableOpacity>
      </View>
      {allfilederror.passworderror ? <Text style={styles.errortxt}>{allfilederror.passworderror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Confirm Password</Text>

      <View
        style={styles.passwordfield}>
        <TextInput
          placeholder='Enter Your Confirm Password'
          secureTextEntry={passwordvisible}
          defaultValue={allfielddata.cpassword}
          onChangeText={(text) => handleInput(text, filedname = "cpassword")}
        />
        <TouchableOpacity
          onPress={() => setPasswordvisible(!passwordvisible)}
        >
          <Text style={styles.showtxt}>Show</Text>
        </TouchableOpacity>
      </View>
      {allfilederror.cpassworderror ? <Text style={styles.errortxt}>{allfilederror.cpassworderror}</Text> : null}


      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={handleSubmit}
      >
        <Text style={styles.buttontxt}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

////





