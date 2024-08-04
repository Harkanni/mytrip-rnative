import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const StartNewTripCard = () => {
   return (
      <View style={{ padding: 20, marginTop: 50, display: 'flex', alignItems: 'center', gap: 25 }}>
         <Ionicons name='location-sharp' size={30} color={'black'} />
         <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>No trips planned yet</Text>
         <Text style={{ fontSize: 20, fontFamily: "outfit-medium", textAlign: 'center', color: Colors.GRAY }}>Looks like it's time to plan a new travel experience! Get started below</Text>

         <TouchableOpacity style={{ padding: 15, backgroundColor: Colors.PRIMARY, borderRadius: 15, paddingHorizontal: 30 }}>
            <Text style={{ color: Colors.WHITE, fontFamily: 'outfit- ', fontSize: 20,}}>Start a new trip</Text>
         </TouchableOpacity>


      </View>
   )
}

export default StartNewTripCard