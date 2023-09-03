import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './src/globalstyle/Styles'

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
        { text != allfielddata.password ? "Confirm Password not matched with password" : null }
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

  }

  const handleSignupbtn = () => {
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
      console.log("data submitted successfully");
    }
  }

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
      />
      {allfielderror.phoneerror ? <Text style={styles.errortxt}>{allfielderror.phoneerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Password</Text>
      <View
        style={styles.passwordfield}>
        <TextInput
          placeholder='Enter Your Password'
          secureTextEntry={showpassword}
          onChangeText={(text) => handleInput(text, fieldname = "password")}
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