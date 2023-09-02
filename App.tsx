import React from 'react'

import ProductWraaper from './components/ProductWraaper'
import UserList from './components/UserList'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={ProductWraaper}/>
          <Stack.Screen name = 'User' component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


// Note : Hum SAGA api implementation kai liye use krte hai redux mai .async operation perform krwane kai liye
// Saga sirf Redux kai sath use hogi na ki ReactNative k sath
//Steps 

// 1 install Saga => 
// yarn add redux-saga then run command npm react-native run-android

// 2 . Make Saga file 
// 3. Configure SAGA with redux Store  