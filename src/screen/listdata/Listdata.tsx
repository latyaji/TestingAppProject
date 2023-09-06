import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../globalstyle/Styles';
import { apiurl, datanotfound, movilist } from '../../constant/Constant'

export const Listdata = ({ navigation }) => {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState('');
    const [visibleItems, setVisibleItems] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [showAllData, setShowAllData] = useState(false);

    const getMoviesFromApiAsync = async () => {
        try {
            const response = await fetch(`${apiurl}`);
            const json = await response.json();
            setOriginalData(json.results);
            const newData = json.results.slice(0, visibleItems * currentPage);
            setFilteredData(newData);

            if (newData.length === json.results.length) {
                setShowAllData(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMoviesFromApiAsync();
    }, [currentPage]);

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
        setFilteredData(newData.slice(0, visibleItems * currentPage));
        setValue(text);
    };

    const loadMoreItems = () => {
        setCurrentPage(currentPage + 1);
    };

    const EmptyListMessage = ({ item }) => {
        return (
            <Text style={styles.emptyListStyle}
                onPress={() => getItem(item)}>
                {datanotfound}
            </Text>
        );
    };

    const renderItems = ({ item }) => {
        return (
            <View style={styles.listcontainer}>
                <Text
                    style={styles.labeltxt}
                >{item.title}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Showalldeatils', { item })}
                    style={styles.buttoncontainer}>
                    <Text style={styles.buttontxt}>View Details</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const getItem = (item) => {
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.headertxt}>{movilist}</Text>
            <TextInput
                style={styles.inputfield}
                placeholder="Enter Your Movie Name ......."
                onChangeText={(text) => searchItems(text)}
                defaultValue={value}
            />
            <FlatList
                data={filteredData}
                renderItem={renderItems}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={EmptyListMessage}
            />
            {!showAllData && (
                <TouchableOpacity
                    onPress={loadMoreItems}
                    style={styles.viewmorebuttoncontainer}>
                    <Text style={styles.viewmorebuttontxt}>View More</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
