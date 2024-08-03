import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);
  return (
    <View style={{ padding: 25, paddingTop: 50, backgroundColor: Colors.WHITE, height: '100%' }}>
      <TouchableOpacity onPress={() => router.back()}>
         <Ionicons name='arrow-back' size={24} color={"black"} />
      </TouchableOpacity>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ marginBottom: 5, fontFamily: 'outfit' }}>FullName</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your full name'
          placeholderTextColor={Colors.PRIMARY}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 5, fontFamily: 'outfit' }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your email address'
          placeholderTextColor={Colors.PRIMARY}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 5, fontFamily: 'outfit' }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Enter your password'
          placeholderTextColor={Colors.PRIMARY}
        />
      </View>

      <TouchableOpacity
         // onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
          borderWidth: 1
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: 'center' }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'outfit'
  }
});

export default SignUp;
