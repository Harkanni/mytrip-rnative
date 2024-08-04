import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '@/components/MyTrips/StartNewTripCard'

const MyTrip = () => {
   const [userTrips, setUserTrips] = useState([]);
   return (
      <View style={{
         padding: 25,
         paddingTop: 50,
         backgroundColor: Colors.WHITE,
         height: '100%'
      }}>
         <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, fontWeight: 'bold'}}>My Trips</Text>
            <Ionicons name='add-circle' size={45} color={'black'} />
         </View>

         {userTrips.length == 0 ? <StartNewTripCard /> : null}
      </View>
   )
}

export default MyTrip