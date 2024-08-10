import { View, Text, FlatList, TouchableOpacity, ScrollView, SectionList, VirtualizedList } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { SelectTravelCompanionList, ISelectTravelCompanionList } from '@/constants/Options';
import OptionCard from '@/components/CreateTrip/OptionCard';
import { GooglePlaceDetail as IGooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '@/context/CreateTripContext';



const SelectTraveler = () => {
   const navigation = useNavigation();
   const [selectedTraveler, setSelectecdTraveler]: any = useState();

   const { tripData, setTripData }: any = useContext(CreateTripContext)

   useEffect(() => {
      navigation.setOptions({
         headerShown: true,
         headerTransparent: true,
         headerTitle: 'Search',
         headerBackTitleVisible: false,
         headerShadowVisible: false,
         // headerBlurEffect: 'prominent',
         headerTitleAlign: 'left',
         headerTintColor: Colors.PRIMARY
      })
   }, [])

   useEffect(() => {
      setTripData({ ...tripData, travelerCount: selectedTraveler })
   }, [selectedTraveler])


   return (
      <View style={{
         padding: 20,
         paddingTop: 100,
         backgroundColor: Colors.WHITE,
         height: '100%'
      }}>
         <Text style={{
            fontSize: 35,
            fontFamily: 'outfit-bold',
            marginTop: 20
         }}>Who's Travelling </Text>

         <View style={{
            marginTop: 20
         }}>
            <Text style={{
               fontFamily: 'outfit-bold',
               fontSize: 18
            }}>
               Choose your travel companion
            </Text>

            {SelectTravelCompanionList.map((item, index) => {
               return <TouchableOpacity
                  onPress={() => setSelectecdTraveler(item)}
                  style={{ marginVertical: 10, }}
                  key={index}
               >
                  <OptionCard option={item} selectedTraveler={selectedTraveler} />
               </TouchableOpacity>
            })}
            {/* <FlatList
               data={SelectTravelCompanionList}
               renderItem={({ item, index }) => {
                  return <TouchableOpacity
                     onPress={() => setSelectecdTraveler(item)}
                     style={{ marginVertical: 15, }}
                  >
                     <OptionCard option={item} selectedTraveler={selectedTraveler} />
                  </TouchableOpacity>
               }}
            >
            </FlatList> */}
         </View>


         <TouchableOpacity style={{
            padding: 20, backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginVertical: 20,
            marginBottom: 200
         }}>
            <Text style={{ textAlign: 'center', color: Colors.WHITE, fontFamily: 'outfit-mmedium', fontSize: 20 }}>Continue</Text>
         </TouchableOpacity>
      </View>
   )
}

export default SelectTraveler 