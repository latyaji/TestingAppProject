import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { styles } from '../../src/globalstyle/Styles'
import { addToCart } from './action'
import {useDispatch} from 'react-redux'

const Product = (props: { item: any , id :any }) => {
  const { item } = props;
  const { id } = props;

  const handleAddToCart = (item) => {
    // console.warn("chl rh h ",item);
    const dispatch = useDispatch()
    dispatch(addToCart(item))


    
  }
  return (
    <View style={styles.cartcontainer} key={id}>
    <Text style={styles.cardtxt}>{item.name}</Text>
    <Text style={styles.cardtxt}>{item.color}</Text>
    <Text style={styles.cardtxt}>{item.price}</Text>
    <Image source={{ uri: item.image }} style={styles.mobileimages} />
    <Button title='Add to cart' 
     onPress={()=>handleAddToCart(item)}
     />
  </View>
  )
}

export default Product