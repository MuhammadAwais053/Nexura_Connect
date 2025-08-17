import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
          By proceeding, you agree to our Terms and Conditions and Privacy Policy.
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
    backgroundColor: '#0F172A',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },

  mainContent: {
    alignItems: 'center',
  },

  titleText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  lightText: {
    color: '#94A3B8',
    fontSize: 16,
    marginTop: 10,
  },

  lightTextwithfont: {
    color: '#94A3B8',
    fontSize: 13,
    padding: 20,
    textAlign: 'center',
    
  },

  image: {
    borderColor: '#1CC4A0',
    borderWidth: 1,
    borderRadius: 85,
    width: 215,
    height: 215,
    marginTop: '30%',
  },

  pressableButton: {
    backgroundColor: '#1CC4A0',
    borderRadius: 20,
    width: 279,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',

  },

  textWrapper: {
    maxWidth: 280,
    alignSelf: 'center',
  },
});
