import { View, Text } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '@/context/CreateTripContext';

const SearchPlace = () => {
   const navigation = useNavigation();
   const router = useRouter();
   const { tripData, setTripData }: any = useContext(CreateTripContext)

   useEffect(() => {
      navigation.setOptions({
         headerShown: true,
         headerTransparent: true,
         headerTitle: 'Search',
         headerBackTitleVisible: false,
         headerShadowVisible: false,
         headerBlurEffect: 'prominent',
         headerTitleAlign: 'left',
         headerTintColor: Colors.PRIMARY
      })
   }, [])

   useEffect(() => {
      console.log(tripData)
   }, [tripData])

   return (
      <View style={{ padding: 25, paddingTop: 100, backgroundColor: Colors.WHITE, height: '100%' }}>
         <GooglePlacesAutocomplete
            styles={{
               textInputContainer: {
                  borderWidth: 2,
                  borderRadius: 10,
                  marginTop: 5,
                  overflow: 'hidden',
                  padding: 5
               }
            }}
            placeholder='Search Place'
            fetchDetails={true}
            onPress={(data, details = null) => {
               // 'details' is provided when fetchDetails = true
               console.log(data.description);
               console.log(details?.geometry.location)
               console.log(details?.photos[0]?.photo_reference)
               console.log(details?.url)

               setTripData({
                  locationInfo: {
                     name: data.description,
                     coordinates: details?.geometry.location,
                     photoRef: details?.photos[0].photo_reference,
                     url: details?.url
                  }
               })

               router.push('../create-trip/select-traveler')
            }}
            query={{
               key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
               language: 'en',
            }}
         />
      </View>
   )
}

export default SearchPlace