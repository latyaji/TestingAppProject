import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login,Dashboard,Listdata } from './src/screen'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Listdata" component={Listdata} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

