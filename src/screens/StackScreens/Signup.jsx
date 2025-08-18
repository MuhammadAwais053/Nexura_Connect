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
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 20,
  },
  textInput: {
    fontSize: 19,
    color: 'white',
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 20,
  },
  passwordLabel: {
    fontSize: 19,
    color: 'white',
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#94A3B8',
    borderWidth: 1,
    borderRadius: 25,
    height: 60,
    width: 280,
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#1E293B',
  },
  inputText: {
    flex: 1,
    color: '#94A3B8',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#94A3B8',
  },
  pressableButton: {
    backgroundColor: '#1CC4A0',
    borderRadius: 20,
    width: 279,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  opacityButton: {
    marginTop: 30,
  },
  text: {
    color: '#94A3B8',
    fontSize: 19,
  },
  lightTextwithfont: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
  },
  textWrapper: {
    maxWidth: 280,
    alignSelf: 'center',
    marginTop: 10,
  },
});
