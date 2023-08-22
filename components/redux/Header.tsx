import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../src/globalstyle/Styles'

const Header = () => {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertxt}>0</Text>
    </View>
  )
}

export default Header