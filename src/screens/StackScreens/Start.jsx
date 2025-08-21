import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import rfSpacing from '../../Theme/rfSpacing';
import color from '../../Theme/color';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image style={styles.image} source={require('../assets/logo.jpg')} />
        <Text style={styles.titleText}>NEXURA CONNECT</Text>
        <Text style={styles.lightText}>Matching skills, building networks</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.lightTextwithfont}>
          By proceeding, you agree to our Terms and Conditions and Privacy
          Policy.
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={styles.pressableButton}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.NC_MainColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rfSpacing['40x'],
  },

  mainContent: {
    alignItems: 'center',
  },

  titleText: {
    color: 'white',
    fontSize: rfSpacing['32x'],
    fontWeight: 'bold',
    marginTop: rfSpacing['20x'],
  },

  buttonText: {
    color: 'white',
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
  },

  lightText: {
    color: color.NC_LightText,
    fontSize: rfSpacing['16x'],
    marginTop: rfSpacing['10x'],
  },

  lightTextwithfont: {
    color: color.NC_LightText,
    fontSize: rfSpacing['13x'],
    padding: rfSpacing['20x'],
    textAlign: 'center',
  },

  image: {
    borderColor: color.NC_Button,
    borderWidth: rfSpacing['1x'],
    borderRadius: rfSpacing['85x'],
    width: rfSpacing['215x'],
    height: rfSpacing['215x'],
    marginTop: '30%',
  },

  pressableButton: {
    backgroundColor: color.NC_Button,
    borderRadius: rfSpacing['20x'],
    width: rfSpacing['280x'],
    height: rfSpacing['54x'],
    alignItems: 'center',
    justifyContent: 'center',
  },

  textWrapper: {
    maxWidth: rfSpacing['280x'],
    alignSelf: 'center',
  },
});
