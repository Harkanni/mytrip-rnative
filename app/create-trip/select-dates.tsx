import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import CalendarPicker, { DateChangedCallback } from 'react-native-calendar-picker'
import moment from 'moment';



const SelectDates = () => {

   const [startDate, setStartDate] = useState<any>()
   const [endDate, setEndDate] = useState<any>()

   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({
         headerShown: true,
         headerTransparent: true,
         headerTitle: '',
         headerBackTitleVisible: false,
         headerShadowVisible: false,
         // headerBlurEffect: 'prominent',
         headerTitleAlign: 'left',
         headerTintColor: Colors.PRIMARY
      })
   }, [])

   const onDateSelection = () => {
      const totalNoOfDays = endDate.diff(startDate, 'days');
      console.log('This is total no of days: ',totalNoOfDays)
   }

   const onDateChange: DateChangedCallback = (date, type) => {
      console.log('wait for it.........')
      console.log(`onDateSelection: ${type} ${date}`)

      if(type === 'START_DATE') {
         setStartDate(moment(date));
      }
      if(type === 'END_DATE') {
         setEndDate(moment(date));
      }
   }


   return (
      <View style={{ padding: 25, paddingTop: 100, backgroundColor: Colors.WHITE, height: '100%' }}>
         <Text style={{ fontFamily: 'outfit-bold', fontSize: 35, marginBottom: 20 }}>Travel Dates</Text>

         <CalendarPicker
            onDateChange={onDateChange}
            allowRangeSelection={true}
            minDate={new Date()}
            maxRangeDuration={5}
            selectedRangeStyle={{
               backgroundColor: Colors.PRIMARY,
            }}
            selectedDayTextStyle={{
               color: Colors.WHITE
            }}
         />

         <TouchableOpacity
            onPress={onDateSelection}
            style={{
               padding: 20, backgroundColor: Colors.PRIMARY,
               borderRadius: 15,
               marginVertical: 20,
               marginBottom: 200
            }}>
            {/* < Link style={{ width: '100%' }} href={'../create-trip/select-dates'}> */}
            <Text style={{ textAlign: 'center', color: Colors.WHITE, fontFamily: 'outfit-mmedium', fontSize: 20 }}>Continue</Text>
            {/* </Link> */}
         </TouchableOpacity>
      </View>
   )
}

export default SelectDates