import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../../globalstyle/Styles'

export const Showalldeatils = ({ route }) => {
  const data = route?.params?.item

  return (
    <ScrollView>
      <Text style={styles.headertxt}>Full Details of This Movie</Text>
      <View style={styles.cardconatiner}>
      <Text style={styles.tittletxt}>{data.original_title}</Text>
        <Text style={styles.overviewtxt}>{data.overview}</Text>
        <Text>{data.popularity}</Text>
        <Text>{data.title}</Text>
        <Text style={styles.txt}>{data.video}</Text>
        <Text style={styles.txt}>{data.adult}</Text>
        <Text style={styles.txt}>{data.id}</Text>
        <Text style={styles.txt}>{data.original_language}</Text>
        <Text style={styles.txt}>{data.vote_average}</Text>
        <Text style={styles.txt}>{data.vote_count}</Text>
      </View>
    </ScrollView>

  )
}




