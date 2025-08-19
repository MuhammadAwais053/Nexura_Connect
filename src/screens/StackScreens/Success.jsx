import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Applied = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Applied Successfully</Text>
      <Image style={styles.image} source={require('../assets/Apply.png')} />
      <Text style={styles.text1}>
        Client will message you shortly if you get shortlisted
      </Text>
      <TouchableOpacity
        style={{ top: '2%' }}
        onPress={() => {
          navigation.navigate('Main');
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#98C7D8',
            fontWeight: 'semibold',
            fontStyle: 'italic',
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Applied;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 30,
    top: '1%',
  },
  text1: {
    fontSize: 22,
    color: '#e9ecef',
    textAlign: 'center',
    paddingHorizontal: 30,
    top: '2%',
  },
});
