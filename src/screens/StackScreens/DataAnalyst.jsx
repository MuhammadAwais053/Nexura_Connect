import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const DataAnalyst = () => {
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
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DataAnalyst;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#111827',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#FFFFFF',
  },
  company: {
    fontSize: 18,
    color: '#1CC4A0',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
    color: '#E2E8F0',
  },
  tagText: {
    fontSize: 13,
    color: '#E2E8F0',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#94A3B8',
    marginBottom: 16,
  },
  budget: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: 25,
  },
  applyButton: {
    backgroundColor: '#1CC4A0',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
