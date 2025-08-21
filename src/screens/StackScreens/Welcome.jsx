import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import rfSpacing from '../../Theme/rfSpacing';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}> Welcome to Nexura Connect</Text>
        <Text style={styles.lightTextwithfont}>
          You're all set to start exploring new opportunities and build your
          freelance network
        </Text>
      </View>
      <Image style={styles.image} source={require('../assets/Welcome.png')} />
      <Pressable
        style={styles.pressableButton}
        onPress={() => {
          navigation.replace('Main');
        }}
      >
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#0F172A',
  },
  pressableButton: {
    backgroundColor: '#1CC4A0',
    borderRadius: rfSpacing['20x'],
    width: rfSpacing['280x'],
    height: rfSpacing['54x'],
    alignItems: 'center',
    justifyContent: 'center',
    top: rfSpacing['30x'],
  },

  textStyle: {
    fontSize: rfSpacing['35x'],

    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightTextwithfont: {
    color: '#94A3B8',
    fontSize: rfSpacing['17x'],
    textAlign: 'center',
  },
  image: {
    width: rfSpacing['280x'],
    height: rfSpacing['280x'],
    borderColor: 'red',
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: rfSpacing['20x'],
  },
  textWrapper: {
    maxWidth: rfSpacing['280x'],
    alignSelf: 'center',
    marginTop: rfSpacing['10x'],
  },
  buttonText: {
    color: 'white',
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
  },
});
