import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dummyData = [
    {
      id: '1',
      title: 'Video Editor',
      company: 'Dolphins Editz',
      price: '200$-450$',
      tags: ['CapCut', 'InShot', 'Editing'],
      description: 'Looking for a perfect Video Editor with some experience',
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      price: '300$-500$',
      tags: ['React', 'Figma', 'HTML'],
      description: 'Seeking a developer to work on an innovative web project',
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'Tech Solutions',
      price: '400$-650$',
      tags: ['Adobe XD', 'Figma', 'Prototyping'],
      description: 'Design user-friendly interfaces with attention to detail',
    },
    {
      id: '4',
      title: 'Content Writer',
      company: 'WordCraft',
      price: '150$-300$',
      tags: ['SEO', 'Copywriting', 'Blogging'],
      description: 'Write engaging blog posts and website content',
    },
    {
      id: '5',
      title: 'Social Media Manager',
      company: 'Viral Buzz',
      price: '250$-400$',
      tags: ['Instagram', 'Facebook Ads', 'Content Planning'],
      description: 'Manage brand presence and grow audience on social media',
    },
    {
      id: '6',
      title: 'Backend Developer',
      company: 'CodeForge',
      price: '350$-600$',
      tags: ['Node.js', 'Express', 'MongoDB'],
      description: 'Build and maintain robust backend services',
    },
    {
      id: '7',
      title: 'Graphic Designer',
      company: 'PixelPerfect Studio',
      price: '220$-450$',
      tags: ['Photoshop', 'Illustrator', 'Branding'],
      description: 'Create visually stunning designs for multiple platforms',
    },
    {
      id: '8',
      title: 'Mobile App Developer',
      company: 'Appify Labs',
      price: '500$-800$',
      tags: ['React Native', 'Firebase', 'UI Components'],
      description: 'Develop cross-platform mobile applications',
    },
    {
      id: '9',
      title: 'Digital Marketer',
      company: 'MarketMasters',
      price: '300$-550$',
      tags: ['Google Ads', 'SEO', 'Analytics'],
      description: 'Plan and execute online marketing campaigns',
    },
    {
      id: '10',
      title: 'Data Analyst',
      company: 'Insight Corp',
      price: '400$-700$',
      tags: ['Excel', 'Power BI', 'SQL'],
      description: 'Analyze datasets to extract meaningful insights',
    },
  ];

  const Card = ({ person }) => (
    <View style={styles.cardContainer}>
      <View style={styles.topRow}>
        <Text style={styles.jobTitle}>{person.title}</Text>
        <Text style={styles.priceText}>{person.price}</Text>
      </View>

      <Text style={styles.companyName}>{person.company}</Text>

      <View style={styles.tagsRow}>
        {person.tags.map((tag, index) => (
          <Text key={index} style={styles.tagItem}>
            {tag}
          </Text>
        ))}
      </View>

      <View style={styles.descriptionRow}>
        <Text style={styles.descriptionText}>{person.description}</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.text}>Welcome to Nexura Connect</Text>
            </View>
          }
          renderItem={({ item }) => <Card person={item} />}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827',
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: '23%',
  },
  headerContainer: {
    maxWidth: 220,
    marginLeft: 22,
    marginBottom: 16,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
  },
  cardContainer: {
    borderRadius: 15,
    backgroundColor: '#1E293B',
    padding: 15,
    marginBottom: 15,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
  },
  companyName: {
    fontSize: 16,
    color: '#1CC4A0',
    marginBottom: 8,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tagItem: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontSize: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  descriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  descriptionText: {
    flex: 1,
    fontSize: 13,
    color: '#94A3B8',
    marginBottom: 12,
  },
  applyButton: {
    backgroundColor: '#1CC4A0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
