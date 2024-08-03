import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import React from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Colors } from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import ToastError from '../../../components/ToastError';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  const showToast = (message) => {
    Toast.show({
      type: 'customToastError',
      position: 'bottom',
      text1: 'Error',
      text2: message,
      visibilityTime: 5000,
      autoHide: true,
      bottomOffset: 50
    });
  };

  const onSignIn = () => {
    if (!email || !password) {
      Platform.OS == 'ios'
        ? showToast('Please enter your details before submitting your account')
        : ToastAndroid.show(
            'Please enter your details before submitting your account',
            ToastAndroid.LONG
          );
      return;
    }

    console.log('email: ' + email + ' password: ' + password);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        await AsyncStorage.setItem('user', JSON.stringify(user));
        console.log('User', user);
        router.replace('/mytrip');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error: ', errorMessage, errorCode, errorMessage);
        if (errorCode === 'auth/invalid-credential') {
          Platform.OS == 'ios'
            ? showToast('Invalid email and password, please try again')
            : ToastAndroid.show(
                'Invalid email and password, please try again',
                ToastAndroid.LONG
              );
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}
    >
      {/* ERROR TOAST FOR IOS */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 99999,
          bottom: 0,
          left: 20,
          width: '100%'
        }}
      >
        {/* <Button title='Show Error Toast' onPress={triggerErrorToast} /> */}
        <Toast
          ref={(ref) => Toast.setRef(ref)}
          config={{
            customToastError: (props) => <ToastError {...props} />
          }}
        />
      </View>
      {/* END ERROR TOAST FOR IOS */}

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='arrow-back' size={30} color={'black'} />
      </TouchableOpacity>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20
        }}
      >
        You've been missed!
      </Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ marginBottom: 5, fontFamily: 'outfit' }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your email address'
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 5, fontFamily: 'outfit' }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Enter your password'
          placeholderTextColor={Colors.PRIMARY}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
          borderWidth: 1
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-up')}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: 'center' }}>
          Create Account
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

export default SignIn;
