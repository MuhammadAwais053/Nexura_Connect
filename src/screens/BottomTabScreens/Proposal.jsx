import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

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

const Proposal = () => {
  const [selectedTab, setselectedTab] = useState('All');
  const [isPressed, setIsPressed] = useState(false);

  const getStatusColor = (status, isPressed) => {
    if (isPressed) {
      return '#fff';
    } else if (status === 'Pending') {
      return '#D9D9D9';
    } else if (status === 'Accepted') {
      return '#1CC4A0';
    } else {
      return '#C41C1C';
    }
  };

  const renderProposal = ({ item }) => {
    return (
      <Pressable
        style={styles.card}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <View style={styles.cardRow}>
          <View style={styles.cardLeft}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.company}>{item.company}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: getStatusColor(item.status, isPressed) },
              ]}
            />
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const filteredProposals =
    selectedTab === 'All'
      ? proposals
      : proposals.filter(item => item.status === selectedTab);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Proposals</Text>
      <Text style={styles.subheading}>Track your application status</Text>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'All' && styles.activeTabButton,
          ]}
          onPress={() => setselectedTab('All')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'All' && styles.activeTabText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Pending' && styles.activeTabButton,
          ]}
          onPress={() => setselectedTab('Pending')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Pending' && styles.activeTabText,
            ]}
          >
            Pending
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Accepted' && styles.activeTabButton,
          ]}
          onPress={() => setselectedTab('Accepted')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Accepted' && styles.activeTabText,
            ]}
          >
            Accepted
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Declined' && styles.activeTabButton,
          ]}
          onPress={() => setselectedTab('Declined')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Declined' && styles.activeTabText,
            ]}
          >
            Declined
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProposals}
        keyExtractor={item => item.id}
        renderItem={renderProposal}
        contentContainerStyle={{ paddingBottom: '27%' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Proposal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827',
    flex: 1,
    padding: 16,
  
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subheading: {
    color: '#94A3B8',
    marginBottom: 10,
    fontSize: 18.5,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1.5,
  },
  activeTabButton: {
    borderBottomColor: '#1CC4A0',
  },
  tabText: {
    color: '#94A3B8',
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1B2B3C',
    borderRadius: 15,
    padding: '6%',
    marginBottom: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 2,
  },
  company: {
    color: '#94A3B8',
    fontSize: 13,
    marginBottom: 4,
  },
  date: {
    color: '#94A3B8',
    fontSize: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    bottom: 17,
    right: '1%',
  },
  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
  },
});
