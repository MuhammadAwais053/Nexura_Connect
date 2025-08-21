import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import rfSpacing from '../../Theme/rfSpacing';

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
    fontSize: rfSpacing['30x'],
    fontWeight: '500',
    color: 'white',
  },
  image: {
    width: rfSpacing['300x'],
    height: rfSpacing['300x'],
    borderRadius: rfSpacing['30x'],
    top: '1%',
  },
  text1: {
    fontSize: rfSpacing['22x'],
    color: '#e9ecef',
    textAlign: 'center',
    paddingHorizontal: rfSpacing['30x'],
    top: '2%',
  },
});
