import Login from "@/components/Login";
import { useEffect, useState } from 'react';
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { auth } from '../configs/FirebaseConfig'
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Index() {
   useFonts({
      'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
      'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
      'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
   })

   const [user, setUser] = useState(null);

   // let user = auth.currentUser;
   useEffect(() => {
      const checkUser = async () => {
         const storedUser = await AsyncStorage.getItem('user');
         if (storedUser) {
            setUser(JSON.parse(storedUser));
         }
         console.log("User: " + user);
      };
      checkUser();
   }, [])



   return (
      <View
         style={{
            flex: 1,
         }}
      >

         {user ? <Redirect href={'./mytrip'} /> : <Login />}

      </View>
   );
}
