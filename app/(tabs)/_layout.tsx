import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='mytrip' />
      <Tabs.Screen name='discover' />
      <Tabs.Screen name='profile' />
    </Tabs>
  )
}

export default TabLayout