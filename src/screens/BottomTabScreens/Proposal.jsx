import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import rfSpacing from '../../Theme/rfSpacing';
import color from '../../Theme/color';

const proposals = [
  {
    id: '1',
    title: 'Mobile App UI Designer',
    company: 'TechNova',
    date: 'Sent July 15, 2025',
    status: 'Pending',
  },
  {
    id: '2',
    title: 'Web Developer',
    company: 'Innovate',
    date: 'Sent July 1, 2025',
    status: 'Accepted',
  },
  {
    id: '3',
    title: 'Senior Developer',
    company: 'DevOps',
    date: 'Sent July 1, 2025',
    status: 'Declined',
  },
  {
    id: '4',
    title: 'Data Analyst',
    company: 'DataWorks',
    date: 'Sent June 25, 2025',
    status: 'Pending',
  },
  {
    id: '5',
    title: 'Project Manager',
    company: 'AgileCorp',
    date: 'Sent June 20, 2025',
    status: 'Accepted',
  },
  {
    id: '6',
    title: 'Frontend Developer',
    company: 'PixelSoft',
    date: 'Sent June 18, 2025',
    status: 'Declined',
  },
  {
    id: '7',
    title: 'Backend Developer',
    company: 'CodeBase',
    date: 'Sent June 15, 2025',
    status: 'Pending',
  },
  {
    id: '8',
    title: 'QA Engineer',
    company: 'Testify',
    date: 'Sent June 12, 2025',
    status: 'Accepted',
  },
  {
    id: '9',
    title: 'System Administrator',
    company: 'NetSecure',
    date: 'Sent June 10, 2025',
    status: 'Declined',
  },
  {
    id: '10',
    title: 'UI/UX Designer',
    company: 'DesignHub',
    date: 'Sent June 5, 2025',
    status: 'Pending',
  },
];

const statusColors = {
  Pending: '#D9D9D9',
  Accepted: '#1CC4A0',
  Declined: '#b33f3f',
};

const Proposal = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const renderProposal = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.company}>{item.company}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: statusColors[item.status] || '#D9D9D9' },
            ]}
          />
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  const filteredProposals =
    selectedTab === 'All'
      ? proposals
      : proposals.filter(item => item.status === selectedTab);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Proposals</Text>
      <Text style={styles.subheading}>Track your application status</Text>
      <View style={styles.tabs}>
        {['All', 'Pending', 'Accepted', 'Declined'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredProposals}
        keyExtractor={item => item.id}
        renderItem={renderProposal}
        contentContainerStyle={{
          paddingBottom: '23%',
        }}
      />
    </View>
  );
};

export default Proposal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.NC_TabMainColor,
    flex: 1,
    padding: rfSpacing['16x'],
  },
  heading: {
    fontSize: rfSpacing['28x'],
    fontWeight: 'bold',
    color: color.NC_White,
  },
  subheading: {
    color: color.NC_LightText,
    marginBottom: rfSpacing['10x'],
    fontSize: rfSpacing['18x'],
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: rfSpacing['16x'],
  },
  tabButton: {
    paddingVertical: rfSpacing['8x'],
    paddingHorizontal: rfSpacing['15x'],
    borderBottomWidth: rfSpacing['2x'],
  },
  activeTabButton: {
    borderBottomColor: color.NC_Button,
  },
  tabText: {
    color: color.NC_LightText,
    fontSize: rfSpacing['14x'],
  },
  activeTabText: {
    color: color.NC_White,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1B2B3C',
    borderRadius: rfSpacing['12x'],
    padding: rfSpacing['12x'],
    marginBottom: rfSpacing['10x'],
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: color.NC_White,
    fontSize: rfSpacing['18x'],
    marginBottom: rfSpacing['2x'],
  },
  company: {
    color: color.NC_LightText,
    fontSize: rfSpacing['14x'],
    marginBottom: rfSpacing['2x'],
  },
  date: {
    color: color.NC_LightText,
    fontSize: rfSpacing['12x'],
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: rfSpacing['11x'],
    height: rfSpacing['11x'],
    borderRadius: rfSpacing['10x'],
    marginRight: rfSpacing['6x'],
  },
  statusText: {
    color: color.NC_White,
    fontSize: rfSpacing['14x'],
  },
});
