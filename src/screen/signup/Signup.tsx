import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../globalstyle/Styles'

export const Signup = () => {
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


  const handleInput = (text, fieldname) => {

    if (fieldname == 'firstname') {
      { allfielderror.nameerror = !text ? `${fieldname} Field is required `: null }
      if(text){
        const charcter = /[^a-z]/gi
        { allfielderror.nameerror = charcter.test(text) ? "numeric character not allowed" : null }

      }
    }
    else if (fieldname == 'email') {
      const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      { allfielderror.emailerror = !text ? "Email Field is required" : null }
      if (text) {
        { allfielderror.emailerror = !emailregex.test(text) ? "Email must be valid" : null }

      }

    }
    else if (fieldname == 'phone') {
      { allfielderror.phoneerror = !text ? "Phone Field is required" : null }
      if(text){
        { text.length != 10 ? allfielderror.phoneerror = "Phone Field should be 10 character" : null }
      }

    }
    else if (fieldname == 'password') {
      const passwordregex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/;
      { allfielderror.passworderror = !text ? "Password Field is required" : null }
      if(text){
        { allfielderror.passworderror = !passwordregex.test(text) ? "Password should be 8 chanracter 1 lower 1 upper" : null }
      }

    }
    else {
      { allfielderror.confirmpassworderror = !text ? "Confirm Password Field is required" : null }

    }
    setAllfielderror({ ...allfielderror, [fieldname]: text })


  }

  return (
    <ScrollView>
      <Text style={styles.headertxt}>Sign Up Form</Text>
      <Text style={styles.labeltxt}>Enter name</Text>
      <TextInput
        placeholder='Enter Your name'
        style={styles.inputfield}
        onChangeText={(text) => handleInput(text, fieldname = "firstname")}
        defaultValue={allfielddata.name}
      />
      {allfielderror.nameerror ? <Text style={styles.errortxt}>{allfielderror.nameerror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Email</Text>
      <TextInput
        placeholder='Enter Your Email'
        style={styles.inputfield}
        onChangeText={(text) => handleInput(text, fieldname = "email")}
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
      <TextInput
        placeholder='Enter Your Password'
        style={styles.inputfield}
        onChangeText={(text) => handleInput(text, fieldname = "password")}
      />
      {allfielderror.passworderror ? <Text style={styles.errortxt}>{allfielderror.passworderror}</Text> : null}

      <Text style={styles.labeltxt}>Enter Confirm Password</Text>
      <TextInput
        placeholder='Enter Your Confirm Password'
        style={styles.inputfield}
        onChangeText={(text) => handleInput(text, fieldname = "confirmpassword")}
      />
      {allfielderror.confirmpassworderror ? <Text style={styles.errortxt}>{allfielderror.confirmpassworderror}</Text> : null}
    </ScrollView>

  )
}

