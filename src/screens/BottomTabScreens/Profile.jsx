import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import rfSpacing from '../../Theme/rfSpacing';
import color from '../../Theme/color';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/Andrey.jpg')} />
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.NC_TabMainColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: rfSpacing['35x'],
    fontWeight: 'heavy',
  },
  image: {
    width: rfSpacing['200x'],
    height: rfSpacing['200x'],
    borderRadius: rfSpacing['100x'],
    borderWidth: rfSpacing['2x'],
    borderColor: color.NC_Button,
  },
});
