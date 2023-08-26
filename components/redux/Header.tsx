import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../src/globalstyle/Styles'

const Header = () => {

  const cartData = useSelector((state) => state.reducer)

  const [cartItems, setCarditems] = useState(0)

  useEffect(() => {
    setCarditems(cartData.length)
  }, [cartData])

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTxt}>{cartItems}</Text>
    </View>
  )
}

export default Header