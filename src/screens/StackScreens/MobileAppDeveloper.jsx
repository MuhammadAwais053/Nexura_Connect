import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import rfSpacing from '../../Theme/rfSpacing';

const MobileAppDeveloper = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.sectionTitle}>Skills Required</Text>
      <Text style={styles.tagText}>{job.tags.join(', ')}</Text>
      <Text style={styles.sectionTitle}>More Information</Text>
      <Text style={styles.description}>{job.description}</Text>
      <Text style={styles.sectionTitle}>Budget</Text>
      <Text style={styles.budget}>{job.price}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => {
          navigation.navigate('Success');
        }}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileAppDeveloper;

const styles = StyleSheet.create({
  container: {
    padding: rfSpacing['20x'],
    backgroundColor: '#111827',
    flexGrow: 1,
  },
  heading: {
    fontSize: rfSpacing['24x'],
    fontWeight: 'bold',
    marginBottom: rfSpacing['6x'],
    color: '#FFFFFF',
  },
  company: {
    fontSize: rfSpacing['18x'],
    color: '#1CC4A0',
    marginBottom: rfSpacing['20x'],
  },
  sectionTitle: {
    fontSize: rfSpacing['16x'],
    fontWeight: '600',
    marginTop: rfSpacing['15x'],
    marginBottom: rfSpacing['8x'],
    color: '#E2E8F0',
  },
  tagText: {
    fontSize: rfSpacing['13x'],
    color: '#E2E8F0',
  },
  description: {
    fontSize: rfSpacing['15x'],
    lineHeight: rfSpacing['22x'],
    color: '#94A3B8',
    marginBottom: rfSpacing['16x'],
  },
  budget: {
    fontSize: rfSpacing['18x'],
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: rfSpacing['25x'],
  },
  applyButton: {
    backgroundColor: '#1CC4A0',
    paddingVertical: rfSpacing['14x'],
    borderRadius: rfSpacing['15x'],
    alignItems: 'center',
    marginTop: rfSpacing['20x'],
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: rfSpacing['16x'],
    fontWeight: 'bold',
  },
});
