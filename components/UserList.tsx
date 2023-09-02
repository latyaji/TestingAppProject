import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getUserList } from './redux/action';
import { useDispatch , useSelector } from 'react-redux';
import { styles } from '../src/globalstyle/Styles';


const UserList = () => {

    const dispatch = useDispatch();
    const useList = useSelector((state)=>state.reducer)

    useEffect(() => {
        dispatch(getUserList());
    });
    console.log("uselist api datatatat ========>>>>>>>",useList)
    return (
        <View>
            {
              useList.map((item)=>(
                <View>
                 <Text style={styles.apitxt}>{item.userId}</Text>
                 <Text style={styles.apitxt}>{item.id}</Text>
                 <Text style={styles.apitxt}>{item.title}</Text>
              </View>
              
              ))
            }
            <Text>UserList</Text>
        </View>
    )
}

export default UserList


