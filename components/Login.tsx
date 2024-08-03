import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Login = () => {
   const router = useRouter();
   return (
      <View>
         <Image source={require('./../assets/images/logon.jpeg')}
            style={{ width: "100%", height: 520 }} />
         <View style={styles.container}>
            <Text style={{ fontSize: 28, fontFamily: "outfit-bold", textAlign: "center", marginTop: 10 }}>AI Travel Planner</Text>
            <Text style={{ fontFamily: "outfit", fontSize: 17, textAlign: "center", color: Colors.GRAY, lineHeight: 21, marginTop: 20 }}>Discover your next adventure effortlesly Personalised itineries at your fingertips. Travel smarter with AI-driven insights.</Text>
            <TouchableOpacity onPress={() => router.push("./auth/sign-in")} style={styles.button}>
               <Text style={{color: Colors.WHITE, textAlign: "center", fontFamily: "outfit", fontSize: 17}}>Sign In With Google</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.WHITE,
      marginTop: -20,
      height: "100%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 25,
   },
   button: {
      padding: 15,
      backgroundColor: Colors.PRIMARY,
      borderRadius: 99,
      marginTop: "20%"
   }
})

export default Login