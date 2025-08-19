import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    backgroundColor: '#111827',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'heavy',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#1CC4A0',
  },
});
