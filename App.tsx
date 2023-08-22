import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Dashboard,Favouriteitem } from './src/screen'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} /> 
        <Stack.Screen name="Favouriteitem" component={Favouriteitem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



// import { View, Text, Image, Button, ScrollView } from 'react-native'
// import React from 'react'
// import Header from './components/redux/Header'
// import Product from './components/redux/Product'
// import { styles } from './src/globalstyle/Styles'

// const App = () => {

//   const Products = [
//     {
//       name: "Samsung",
//       color: "white",
//       price: 1200,
//       image: "https://birchtree.me/content/images/size/w2000/2021/06/007-copy.jpg",
//     },
//     {
//       name: "Apple",
//       color: "red",
//       price: 11200,
//       image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
//     },
//     {
//       name: "Vivo",
//       color: "black",
//       price: 10200,
//       image: "https://media.istockphoto.com/id/1190965421/photo/a-hand-holding-and-showing-black-mobile-phone-with-blank-screen-in-cafe.webp?b=1&s=170667a&w=0&k=20&c=-Sp-xgF2aslP6mn0jWokW6mCQ2ib_lU2jD-z7SPNpLY=",
//     },
//     {
//       name: "nokia",
//       color: "pink",
//       price: 13200,
//       image: "https://birchtree.me/content/images/size/w2000/2021/06/007-copy.jpg",
//     },

//   ]
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         {Products.map((item,id) => <Product item={item} key={id} id={undefined}/>
//         )}
//       </ScrollView>
//     </View>
//   )
// }

// export default App






// import { View, Text, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const baseUrl = 'https://reqres.in/api/users?page=2';

// const App = () => {
//   const [alldata,setAlldata] = useState([])


//   useEffect(() => {
//     fetchUser()
//   }, [])

//   const fetchUser = async () => {
//     try {
//       const url = `${baseUrl}`;
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setAlldata(data)
//         //console.log(data);
//       } else {
//         console.log('Response not OK:', response.status);
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

// console.log("getdata =======>>>>>",alldata);

//   return (
//     <View>
//       {alldata.map((item,index)=>
//         <View>
//           <Text>{item?.email}</Text>
//           <Text>{item?.first_name}</Text>
//           <Text>{item?.last_name}</Text>
//           <Image source={{uri: item?.avatar}}/>
//           </View>
//        )}
//       <Text>App</Text>
//     </View>
//   )
// }


// export default App



//////



