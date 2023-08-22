import { View, Text, TouchableOpacity, Image ,SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../globalstyle/Styles';
import { favicon } from '../../assest';

export const Favouriteitem = ({ navigation }) => {
    const [favData, setFavData] = useState([]);

    const loadFavData = async () => {
        try {
            const getfavdata = await AsyncStorage.getItem('favdata');
            if (getfavdata) {
                const savedata = JSON.parse(getfavdata);
                setFavData(savedata);
            }
        } catch (error) {
            console.error('Error loading favorite data:', error);
        }
    }

    const removeFromFavorites = async (id) => {
        try {
            const updatedData = favData.filter((item) => item.id !== id);
            await AsyncStorage.setItem('favdata', JSON.stringify(updatedData));
            setFavData(updatedData);
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
    }

    useEffect(() => {
        loadFavData();
    }, []);

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headertxt}>Favourite item</Text>
                {favData.map((item, index) => (
                    <View
                        key={index.toString()}
                        style={styles.shareconatiner}>
                        <View>
                            <TouchableOpacity
                                onPress={() => removeFromFavorites(item.id)}
                            >
                                <Image source={favicon} style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.titletxt}>{item.email}</Text>
                            <Text style={styles.titletxt}>{item.first_name}</Text>
                            <Text style={styles.titletxt}>{item.last_name}</Text>
                        </View>
                        <View>
                            <Image source={{ uri: item.avatar }} style={styles.img} />
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>

    )
}



