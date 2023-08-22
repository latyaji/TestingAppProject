// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { styles } from '../../globalstyle/Styles';

// export const Favouriteitem = ({ navigation }) => {
//     const [apidata, setApidata] = useState([]);

//     const showfavdata = async () => {
//         const getfavdata = await AsyncStorage.getItem('favdata');
//         const savedata = JSON.parse(getfavdata)
        
//         if (savedata.length > 0) {
//             setApidata(savedata)
//         }

//     }

//     useEffect(() => {
//         showfavdata()
//     }, [])

//     return (
//         <View>
//             <Text>Favourite item</Text>
//             {apidata.map((item, index) => (

//                 <View
//                     key={index.toString()}
//                     style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, margin: 12, padding: 12 }}>
//                     <View>
//                         <TouchableOpacity
//                         //   onPress={() => handlefavIcon(item.id ,index)}
//                         >
//                             <Image source={require('../../assest/fav.jpeg')} style={{ width: 20, height: 20 }} />
//                         </TouchableOpacity>
//                         <Text style={styles.titletxt}>{item.email}</Text>
//                         <Text style={styles.titletxt}>{item.first_name}</Text>
//                         <Text style={styles.titletxt}>{item.last_name}</Text>
//                     </View>
//                     <View>
//                         <Image source={{ uri: item.avatar }} style={styles.img} />
//                     </View>
//                 </View>
//             ))}
//         </View>
//     )
// }


//2nd code start

// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { styles } from '../../globalstyle/Styles';

// export const Favouriteitem = ({ navigation }) => {
//     const [apidata, setApidata] = useState([]);

//     const showfavdata = async () => {
//         const getfavdata = await AsyncStorage.getItem('favdata');
//         const savedata = JSON.parse(getfavdata)
        
//         if (savedata) {
//             setApidata(savedata)
//         }
//     }

//     const removeFromFavorites = async (id) => {
//         try {
//             const getfavdata = await AsyncStorage.getItem('favdata');
//             if (getfavdata) {
//                 const getdata = JSON.parse(getfavdata);
//                 const updatedData = getdata.filter((item) => item.id !== id);
//                 await AsyncStorage.setItem('favdata', JSON.stringify(updatedData));
//                 setApidata(updatedData);
//             }
//         } catch (error) {
//             console.error('Error removing from favorites:', error);
//         }
//     }

//     useEffect(() => {
//         showfavdata()
//     }, [])

//     return (
//         <View>
//             <Text>Favourite item</Text>
//             {apidata.map((item, index) => (
//                 <View
//                     key={index.toString()}
//                     style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, margin: 12, padding: 12 }}>
//                     <View>
//                         <TouchableOpacity
//                             onPress={() => removeFromFavorites(item.id)}
//                         >
//                             <Image source={require('../../assest/fav.jpeg')} style={{ width: 20, height: 20 }} />
//                         </TouchableOpacity>
//                         <Text style={styles.titletxt}>{item.email}</Text>
//                         <Text style={styles.titletxt}>{item.first_name}</Text>
//                         <Text style={styles.titletxt}>{item.last_name}</Text>
//                     </View>
//                     <View>
//                         <Image source={{ uri: item.avatar }} style={styles.img} />
//                     </View>
//                 </View>
//             ))}
//         </View>
//     )
// }


//2nd code end


import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../globalstyle/Styles';

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
        <View>
            <Text style={styles.headertxt}>Favourite item</Text>
            {favData.map((item, index) => (
                <View
                    key={index.toString()}
                    style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, margin: 12, padding: 12 }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => removeFromFavorites(item.id)}
                        >
                            <Image source={require('../../assest/fav.jpeg')} style={{ width: 20, height: 20 }} />
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
    )
}