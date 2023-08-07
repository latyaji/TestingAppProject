import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../globalstyle/Styles'

export const Listdata = ({ route }) => {
    const data = route.params.item
    return (
        <SafeAreaView>
            <Text style={styles.itemalldetailstxt}>Item all details</Text>
            <View style={styles.alldetailcontainer}>
                <Text style={styles.titletxt}>id : {data.id}</Text>
                <Text style={styles.titletxt}>User Id : {data.userId}</Text>
                <Text style={[styles.titletxt, { fontSize: 19 }]}>Title : {data.title}</Text>
                <Text style={styles.bodytxt}>Body : {data.body}</Text>
                
            </View>
        </SafeAreaView>


    )
}

