// import React, { useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   Text,
//   Platform,
//   KeyboardAvoidingView,
//   ScrollView,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';

// import { styles } from '../../globalstyle/Styles';
// import axios from 'axios';

// // const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
// const baseUrl = 'https://reqres.in/api/users?page=2';


// export const Dashboard = ({ navigation }) => {
//   const [apidata, setApidata] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       setLoading(true);
//       const url = `${baseUrl}`;
//       const response = await axios.get(url);
//       setApidata(response.data);
//     } catch (error) {
//       console.log('error======>>>>>', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getdata = (item) => {
//     navigation.navigate('Listdata', { item });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={90}
//         style={{ flex: 1 }}
//       >
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           <Text style={styles.headertxt}>Welcome to Dashboard</Text>
//           <TouchableOpacity style={styles.refecebuttoncontainer} onPress={fetchUser}>
//             <Text style={styles.buttontxt}>Refresh</Text>
//           </TouchableOpacity>
//           {loading ? (
//             <ActivityIndicator size="large" color="grey" style={styles.loadingIndicator} />
//           ) : (
//             apidata.map((item, id) => (
//               <TouchableOpacity
//                 style={styles.apidatacontainer}
//                 key={id.toString()}
//                 onPress={() => getdata(item)} >
//                 <Text style={styles.titletxt}>{item.title}</Text>
//                 <Text>{item.body}</Text>
//               </TouchableOpacity>
//             ))
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };



import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import { styles } from '../../globalstyle/Styles';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';


const baseUrl = 'https://reqres.in/api/users?page=2';


export const Dashboard = ({ navigation }) => {
  const [apidata, setApidata] = useState([]);


  useEffect(() => {

    fetchUser();
  }, []);



  const fetchUser = async () => {
    try {
      const url = `${baseUrl}`;
      const response = await axios.get(url);
      const getfavdata = await AsyncStorage.getItem('favdata');
      if (getfavdata) {
        const getdata = JSON.parse(getfavdata);
        const filteredData = response.data.data.filter(
          (item) => !getdata.some((favItem) => favItem.id === item.id)
        );
        setApidata(filteredData);
      } else {
        setApidata(response.data.data);
      }
    } catch (error) {
      console.log('error======>>>>>', error);
    }
  };
  

  const handlefavIcon = async (id, index) => {
    const unfavlistdata = apidata.filter((item) => item.id != id)

    setApidata(unfavlistdata)

    try {
       await AsyncStorage.clear();

      const getfavdata = await AsyncStorage.getItem('favdata');
      if (getfavdata) {
        const getdata = JSON.parse(getfavdata)
        const filterItem = getdata.filter((item) => item.id != id)
        await AsyncStorage.setItem('favdata', JSON.stringify([...filterItem, apidata[index]]));
      }
      else {
        await AsyncStorage.setItem('favdata', JSON.stringify([apidata[index]]));
      }
      // console.log("ddddd",await AsyncStorage.getItem('favdata'));



    } catch (error) {
      console.error('Error saving user data:', error);
    }



  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => navigation.navigate('Favouriteitem')}
        >
          <Text style={styles.buttontxt}>View Favourate List</Text>
        </TouchableOpacity>

        {apidata.map((item, index) => (

          <View
            key={index.toString()}
            style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, margin: 12, padding: 12 }}>
            <View>
              <TouchableOpacity
                onPress={() => handlefavIcon(item.id, index)}
              >
                <Image source={require('../../assest/unfav.png')} style={{ width: 20, height: 20 }} />
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



      </ScrollView>
    </SafeAreaView>
  );
};

