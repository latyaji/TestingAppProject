import { View, Text } from 'react-native'
import React from 'react'
import Header from './components/redux/Header'
import Product from './components/redux/Product'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Header/>
      <Product/>
    </View>
  )
}

export default App