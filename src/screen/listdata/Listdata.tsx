import { View, Text, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

import { styles } from '../../globalstyle/Styles';

export const Listdata = ({navigation}) => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState('');
    const [visibleItems, setVisibleItems] = useState(10); // Number of initially visible items

    const getMoviesFromApiAsync = async () => {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/top_rated?api_key=c5a4fbf90fb9ccaa1d34802b47e675a6'
            );
            const json = await response.json();
            setOriginalData(json.results);
            setFilteredData(json.results.slice(0, visibleItems)); // Show the first 10 items initially
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMoviesFromApiAsync();
    }, []);

    const searchItems = (text) => {
        const newData = originalData.filter((item) => {
            const itemData = item.title.toUpperCase();
            const textData = text.toUpperCase();
            if (text.length > 0) {
                return itemData.indexOf(textData) > -1;
            } else {
                return true;
            }
        });
        setFilteredData(newData.slice(0, visibleItems));
        setValue(text);
    };
    

    const loadMoreItems = () => {
        setVisibleItems(visibleItems + 10);
        setFilteredData(originalData.slice(0, visibleItems + 10));
    };

    const renderHeader = () => {
        return (
            <TextInput
                style={styles.inputfield}
                placeholder="Enter Your Movie Name ......."
                onChangeText={(text) => searchItems(text)}
                defaultValue={value}
            />
        );
    };

    return (
        <View>
            <Text style={styles.headertxt}>Movie List</Text>
            <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                    <View style={styles.listcontainer}>
                        <Text style={styles.labeltxt}>{item.title}</Text>
                        <TouchableOpacity 
                          onPress={()=>navigation.navigate('Showalldeatils')}
                         style={styles.buttoncontainer}>
                            <Text style={styles.buttontxt}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={renderHeader}
            />
            {filteredData.length < originalData.length && (

                <TouchableOpacity
                    onPress={loadMoreItems}
                    style={styles.buttoncontainer}
                >
                    <Text style={styles.buttontxt}>View More</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
