import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'

interface IOptionsProps {
   option: {
      id?: number,
      title?: string,
      desc?: string,
      icon?: string,
   },

   selectedTraveler: any,
}


const OptionCard = ({ option, selectedTraveler }: IOptionsProps) => {

   useEffect(() => {
      console.log("selectedTraveler: " + selectedTraveler)
   }, [selectedTraveler])


   return (
      <View style={[{
         padding: 20,
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         backgroundColor: Colors.LIGHT_GRAY,
         borderRadius: 15
      }, selectedTraveler?.id == option?.id && {borderWidth: 3}]}>
         <View style={{ display: 'flex', gap: 5 }}>
            <Text style={{
               fontSize: 20,
               fontFamily: 'outfit-bold',
            }}>
               {option?.title}
            </Text>

            <Text style={{
               fontSize: 17,
               fontFamily: 'outfit',
               color: Colors.GRAY,
            }}>
               {option?.desc}
            </Text>

         </View>
         <Text style={{ fontSize: 40, }}> {option?.icon} </Text>
      </View>
   )
}

export default OptionCard