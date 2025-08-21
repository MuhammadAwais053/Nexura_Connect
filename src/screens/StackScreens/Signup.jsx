import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import rfSpacing from '../../Theme/rfSpacing';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const handleSignup = () => {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Keyboard.dismiss();

    setname('');
    setemail('');
    setpassword('');
    setconfirmPassword('');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Create Account</Text>
      <Text style={styles.subtitle}>Signup to join Us</Text>

      <Text style={styles.textInput}>Name</Text>
      <View style={styles.inputWithIcon}>
        <Image source={require('../assets/user.png')} style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Enter name"
          placeholderTextColor="#94A3B8"
          value={name}
          onChangeText={setname}
        />
      </View>

      <Text style={styles.textInput}>Email</Text>
      <View style={styles.inputWithIcon}>
        <Image source={require('../assets/mail.png')} style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Enter email"
          placeholderTextColor="#94A3B8"
          value={email}
          onChangeText={setemail}
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
          onChangeText={setpassword}
        />
      </View>

      <Text style={styles.passwordLabel}>Confirm Password</Text>
      <View style={styles.inputWithIcon}>
        <Image source={require('../assets/forgot.png')} style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Enter confirm password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setconfirmPassword}
        />
      </View>

      <Pressable style={styles.pressableButton} onPress={handleSignup}>
        <Text style={styles.signupText}>Signup</Text>
      </Pressable>
      <View style={styles.textWrapper}>
        <Text style={styles.lightTextwithfont}>
          By proceeding, you agree to our Terms and Conditions and Privacy
          Policy.
        </Text>
      </View>
    </View>
  );
};

export default Signup;

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
    fontSize: rfSpacing['20x'],
  },
  textInput: {
    fontSize: rfSpacing['19x'],
    color: 'white',
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: rfSpacing['50x'],
    marginTop: rfSpacing['20x'],
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
    borderWidth: rfSpacing['1x'],
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
    marginTop: rfSpacing['20x'],
  },
  signupText: {
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
  lightTextwithfont: {
    color: '#94A3B8',
    fontSize: rfSpacing['12x'],
    textAlign: 'center',
  },
  textWrapper: {
    maxWidth: rfSpacing['280x'],
    alignSelf: 'center',
    marginTop: rfSpacing['10x'],
  },
});
