import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import rfSpacing from '../../Theme/rfSpacing';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: rfSpacing['120x'],
          height: rfSpacing['120x'],
          borderWidth: rfSpacing['2x'],
          borderColor: '#1CC4A0',
          borderRadius: rfSpacing['90x'],
        }}
        source={require('../assets/logo.jpg')}
      />
      <Text style={styles.textStyle}>Welcome </Text>
      <Text style={styles.subtitle}>Log in to continue</Text>

      <Text style={styles.textInput}>Email</Text>
      <View style={styles.inputWithIcon}>
        <Image source={require('../assets/mail.png')} style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Enter email"
          placeholderTextColor="#94A3B8"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={styles.passwordLabel}>Password</Text>
      <View style={styles.inputWithIcon}>
        <Image source={require('../assets/forgot.png')} style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Enter password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        style={styles.opacityButton}
        onPress={() => Alert.alert('Hey!', 'This is TouchableOpacity button')}
      >
        <Text
          style={{
            color: '#94A3B8',
            fontSize: rfSpacing['15x'],
            left: '14.5%',
            bottom: rfSpacing['20x'],
          }}
        >
          Forgot password
        </Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          if (email.trim() == '' || password.trim() == '') {
            Alert.alert('Error', 'Please fill in both fields');
            return;
          }

          setEmail('');
          setPassword('');
          navigation.navigate('Welcome');
        }}
        style={styles.pressableButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#0F172A',
  },

  textStyle: {
    fontSize: rfSpacing['35x'],
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#94A3B8',
    marginBottom: '17%',
    fontSize: rfSpacing['20x'],
  },

  textInput: {
    fontSize: rfSpacing['19x'],
    color: 'white',
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: rfSpacing['50x'],
  },

  passwordLabel: {
    fontSize: rfSpacing['19x'],
    color: 'white',
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: rfSpacing['50x'],
    marginTop: rfSpacing['20x'],
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#94A3B8',
    borderWidth: rfSpacing['2x'],
    borderRadius: rfSpacing['25x'],
    height: rfSpacing['60x'],
    width: rfSpacing['280x'],
    marginTop: rfSpacing['10x'],
    paddingHorizontal: rfSpacing['15x'],
    backgroundColor: '#1E293B',
  },

  inputText: {
    flex: 1,
    color: '#94A3B8',
    fontSize: rfSpacing['16x'],
    marginLeft: rfSpacing['10x'],
  },

  icon: {
    width: rfSpacing['20x'],
    height: rfSpacing['20x'],
    tintColor: '#94A3B8',
  },

  pressableButton: {
    backgroundColor: '#1CC4A0',
    borderRadius: rfSpacing['20x'],
    width: rfSpacing['280x'],
    height: rfSpacing['54x'],
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    color: 'white',
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
  },

  opacityButton: {
    marginTop: rfSpacing['30x'],
  },

  text: {
    color: '#94A3B8',
    fontSize: rfSpacing['19x'],
  },
});
