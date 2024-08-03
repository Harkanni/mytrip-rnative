// CustomToastError.js
import React from 'react';
import { View, Text } from 'react-native';

const ToastError = ({ text1, text2 }: { text1?: string, text2?: string}) => (
  <View style={{ width: '100%', padding: 16, backgroundColor: 'red', borderRadius: 8 }}>
    <Text style={{ color: 'white', fontSize: 16 }}>{text1}</Text>
    {text2 ? <Text style={{ color: 'white', fontSize: 12 }}>{text2}</Text> : null}
  </View>
);

export default ToastError;
