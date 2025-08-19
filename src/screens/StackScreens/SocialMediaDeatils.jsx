import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const SocialMediaDeatils = () => {
  const route = useRoute();
  const { job } = route.params;

  return (
    <View>
      <Text>Applying For: {job.title}</Text>
      <Text>Company: {job.company}</Text>
      <Text>Skills Required: {job.tags.join(', ')}</Text>
      <Text>More Information: {job.description}</Text>
      <Text>Budget: {job.price}</Text>
    </View>
  );
};

export default SocialMediaDeatils;

const styles = StyleSheet.create({});
