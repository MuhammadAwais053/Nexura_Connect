import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import rfSpacing from '../../Theme/rfSpacing';
import color from '../../Theme/color';

const messages = [
  {
    id: '1',
    name: 'Ronnie Coleman',
    description: "Great Proposal, Let's discuss...",
    time: 'Just now',
    photo: require('../assets/Ronnie.jpg'),
  },
  {
    id: '2',
    name: 'Arnold Schwarzenegger',
    description: "Great Proposal, Let's discuss...",
    time: 'Just now',
    photo: require('../assets/arnold.jpg'),
  },
  {
    id: '3',
    name: 'Mike Mentzer',
    description: 'Great Proposal, are you available.',
    time: 'Just now',
    photo: require('../assets/Ray.jpg'),
  },
  {
    id: '4',
    name: 'Andrey Smaev',
    description: "Great Proposal, Let's discuss...",
    time: '3:45AM',
    photo: require('../assets/Andrey.jpg'),
  },
  {
    id: '5',
    name: 'Jay Cutler',
    description: 'Excited to collaborate on this project.',
    time: 'Yesterday',
    photo: require('../assets/Jay.jpg'),
  },
  {
    id: '6',
    name: 'Khabib Nurmagomedov',
    description: 'Can you share more details?',
    time: '2d ago',
    photo: require('../assets/Khabib.jpg'),
  },
  {
    id: '7',
    name: 'Khamzat ',
    description: "Let's finalize the proposal soon.",
    time: '3d ago',
    photo: require('../assets/Khamzat.png'),
  },
  {
    id: '8',
    name: 'Eddie hall',
    description: 'Reviewing your documents.',
    time: '1w ago',
    photo: require('../assets/Eddie.jpg'),
  },
  {
    id: '9',
    name: 'Thor',
    description: "Let's set up a meeting tomorrow.",
    time: '1w ago',
    photo: require('../assets/Hafthor.webp'),
  },
  {
    id: '10',
    name: 'Snappy Dev',
    description: "Thanks, I'll get back to you.",
    time: '2w ago',
    photo: require('../assets/Must.jpg'),
  },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.photo} style={styles.avatar} />
    <View style={styles.cardContent}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>
      <Text style={styles.subheading}>Communicate with others</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: '23%' }}
      />
    </View>
  );
};

export default Messages;

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
    marginBottom: rfSpacing['16x'],
    fontSize: rfSpacing['16x'],
  },
  card: {
    flexDirection: 'row',
    backgroundColor: color.NC_InputBack,
    borderRadius: rfSpacing['12x'],
    padding: rfSpacing['12x'],
    marginBottom: rfSpacing['12x'],
    alignItems: 'center',
  },
  avatar: {
    width: rfSpacing['48x'],
    height: rfSpacing['48x'],
    borderRadius: rfSpacing['24x'],
    marginRight: rfSpacing['12x'],
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: rfSpacing['16x'],
    fontWeight: '600',
    color: color.NC_White,
  },
  time: {
    fontSize: rfSpacing['12x'],
    color: color.NC_LightText,
  },
  description: {
    fontSize: rfSpacing['14x'],
    color: color.NC_LightText,
    marginTop: rfSpacing['2x'],
  },
});
