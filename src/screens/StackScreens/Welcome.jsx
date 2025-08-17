import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    borderRadius: 20,
    width: 279,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },

  textStyle: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightTextwithfont: {
    color: '#94A3B8',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: 281,
    height: 281,
    borderColor: 'red',
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 20,
  },
  textWrapper: {
    maxWidth: 280,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
