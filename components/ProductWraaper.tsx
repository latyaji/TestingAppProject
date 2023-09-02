import { View, Text, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import Header from './Header'
import { styles } from '../src/globalstyle/Styles'
import Product from './Product'

const ProductWraaper = ({navigation}) => {

  const Products = [
    {
      name: "Samsung",
      color: "white",
      price: 1200,
      image: "https://birchtree.me/content/images/2021/06/007-copy.jpg"
    },
    {
      name: "Vivo",
      color: "blue",
      price: 12200,
      image: "https://media.istockphoto.com/id/1190965421/photo/a-hand-holding-and-showing-black-mobile-phone-with-blank-screen-in-cafe.webp?b=1&s=170667a&w=0&k=20&c=-Sp-xgF2aslP6mn0jWokW6mCQ2ib_lU2jD-z7SPNpLY="
    },
    {
      name: "Nokia",
      color: "black",
      price: 33200,
      image: "https://i.etsystatic.com/20789136/r/il/b7bec9/3258444860/il_fullxfull.3258444860_6lwa.jpg"
    },
    {
      name: "Narzo",
      color: "yellow",
      price: 13200,
      image: "https://i.etsystatic.com/36437479/r/il/b19fda/4051455314/il_570xN.4051455314_ob31.jpg"
    },
    {
      name: "Samsung1",
      color: "white",
      price: 1200,
      image: "https://birchtree.me/content/images/2021/06/007-copy.jpg"
    },
    {
      name: "Vivo1",
      color: "blue",
      price: 12200,
      image: "https://media.istockphoto.com/id/1190965421/photo/a-hand-holding-and-showing-black-mobile-phone-with-blank-screen-in-cafe.webp?b=1&s=170667a&w=0&k=20&c=-Sp-xgF2aslP6mn0jWokW6mCQ2ib_lU2jD-z7SPNpLY="
    },
    {
      name: "Nokia1",
      color: "black",
      price: 33200,
      image: "https://i.etsystatic.com/20789136/r/il/b7bec9/3258444860/il_fullxfull.3258444860_6lwa.jpg"
    },
    {
      name: "Narzo1",
      color: "yellow",
      price: 13200,
      image: "https://i.etsystatic.com/36437479/r/il/b19fda/4051455314/il_570xN.4051455314_ob31.jpg"
    },

  ]
  return (
    <View>
        <Button
          title='Add to Saga List'
          onPress={()=>navigation.navigate('User')}
         />
      <Header/>
      <ScrollView>
        {Products.map((item) =><Product item={item} />)}
      </ScrollView>
    </View>
  )
}

export default ProductWraaper