import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const TabLayout = () => {
   return (
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }}>
         <Tabs.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name='location-sharp' size={24} color={color} />, tabBarLabel: 'My Trip', }} name='mytrip' />
         <Tabs.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name='globe-sharp' size={24} color={color} />, tabBarLabel: 'Discover', }} name='discover' />
         <Tabs.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name='people-circle' size={24} color={color} />, tabBarLabel: 'Profile', }} name='profile' />
      </Tabs>
   )
}

export default TabLayout