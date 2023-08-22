import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Share from 'react-native-share';
import { unfavicon } from '../../assest';

import { styles } from '../../globalstyle/Styles';

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
      // await AsyncStorage.clear();
      const getfavdata = await AsyncStorage.getItem('favdata');
      if (getfavdata) {
        const getdata = JSON.parse(getfavdata)
        const filterItem = getdata.filter((item) => item.id != id)
        await AsyncStorage.setItem('favdata', JSON.stringify([...filterItem, apidata[index]]));
      }
      else {
        await AsyncStorage.setItem('favdata', JSON.stringify([apidata[index]]));
      }

    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }
  const share = async (item) => {

    const options = {
      id: `${item.id}`,
      message:
        'Deserunt ea sint magna dolor incididunt sit culpa id laborum cupidatat commodo do sint.',
      url: `${item.avatar}`,
      email: `${item.email}`,
      subject: 'Eiusmod esse veniam esse.',
      firstname: `${item.first_name}`,
      lastname: `${item.last_name}`,
      recipient: '919988998899',
    };


    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
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
             style={styles.shareconatiner}>
          <TouchableOpacity
              onPress={() => share(item)}
            >
            <TouchableOpacity
                onPress={() => handlefavIcon(item.id, index)}
              >
             <Image source={unfavicon} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>
              <Text style={styles.titleemailtxt}>{item.email}</Text>
              <Text style={styles.titletxt}>{item.first_name}</Text>
              <Text style={styles.titletxt}>{item.last_name}</Text>
            </TouchableOpacity>
            <View>
              <Image source={{ uri: item.avatar }} style={styles.img} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

