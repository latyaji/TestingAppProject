import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
import { styles } from '../../globalstyle/Styles';

export const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitdata = () => {
    const registeruser = 'admin';
    const registeruserpassword = 'Admin@123';
    if (username === registeruser && password === registeruserpassword) {
      navigation.navigate('Dashboard');
      setUsername('')
      setPassword('') // 
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.headertxt} testID='login'>Login Details</Text>

          <Text style={styles.labeltxt}>Enter Username</Text>
          <TextInput
           testID='loginInput'
            style={styles.inputfield}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Text style={styles.labeltxt}>Enter Password</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1,margin:12,borderRadius:6 }}>
            <TextInput
             testID='passwordInput'
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
              <Text style={{marginRight:12,marginTop:12,fontWeight:"bold",color:"#000"}}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttoncontainer}
            onPress={submitdata}
          >
            <Text style={styles.buttontxt}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};




