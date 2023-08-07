import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { styles } from '../../globalstyle/Styles';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const Dashboard = ({ navigation }) => {
  const [apidata, setApidata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const url = `${baseUrl}`;
      const response = await axios.get(url);
      setApidata(response.data);
    } catch (error) {
      console.log('error======>>>>>', error);
    } finally {
      setLoading(false);
    }
  };

  const getdata = (item) => {
    navigation.navigate('Listdata', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.headertxt}>Welcome to Dashboard</Text>
          <TouchableOpacity style={styles.refecebuttoncontainer} onPress={fetchUser}>
            <Text style={styles.buttontxt}>Refresh</Text>
          </TouchableOpacity>
          {loading ? (
            <ActivityIndicator size="large" color="grey" style={styles.loadingIndicator} />
          ) : (
            apidata.map((item, id) => (
              <TouchableOpacity
                style={styles.apidatacontainer}
                key={id.toString()}
                onPress={() => getdata(item)}
              >
                <Text style={styles.titletxt}>{item.title}</Text>
                <Text>{item.body}</Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};