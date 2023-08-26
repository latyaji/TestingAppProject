import { View, Text, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../src/globalstyle/Styles'
import { addToCart, removeFromCart } from './action'
import { useDispatch, useSelector } from 'react-redux'


const Product = ({ item }) => {

  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.reducer)
  const [isAdded, setIsadded] = useState(false)

  const handleAddToCart = (item) => {
    // console.warn("checkk", item);
    dispatch(addToCart(item))

  }

  const handleRemoveFromCart = (item) => {
    // console.warn("Remove item ====>>>",item.name);
    dispatch(removeFromCart(item.name))

  }

  // useEffect(() => {
  //   if (cartItem && cartItem.length) {
  //     cartItem.forEach(element => {
  //       //console.log("remove functionality ======>>>>",element);
  //       if (element.name === item.name) {
  //         setIsadded(true)
  //       }

  //     });
  //   }
  // })

  useEffect(() => {
    let result = cartItem.filter((element) => {
      // remove functionality
      return element.name === item.name
    })
    if (result.length) {
      setIsadded(true)
    }
    else {
      setIsadded(false)
    }
  })

  return (
    <View style={styles.cardconatiner}>
      <Text style={styles.headtxt}>{item.name}</Text>
      <Text style={styles.normaltxt}>{item.color}</Text>
      <Text>{item.price}</Text>
      <Image source={{ uri: item.image }} style={styles.cardimg} />
      {isAdded ?
        <Button
          title='Remove to cart'
          onPress={() => handleRemoveFromCart(item)}
        />
        :
        <Button
          title='Add to cart'
          onPress={() => handleAddToCart(item)}
        />
      }

    </View>
  )
}

export default Product