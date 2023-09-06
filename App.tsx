import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Listdata, Showalldeatils } from './src/screen'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listdata" component={Listdata} options={{ headerShown: false }}/> 
        <Stack.Screen name="Showalldeatils" component={Showalldeatils} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



