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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: 120,
          borderWidth: 2,
          borderColor: '#1CC4A0',
          borderRadius: 90,
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
          style={{ color: '#94A3B8', fontSize: 15, left: '14.5%', bottom: 20 }}
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
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#94A3B8',
    marginBottom: '25%',
    fontSize: 20,
  },

  textInput: {
    fontSize: 19,
    color: 'white',
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: 50,
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
  },

  loginText: {
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
});
