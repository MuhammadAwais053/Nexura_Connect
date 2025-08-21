import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import rfSpacing from '../../Theme/rfSpacing';

const HomeScreen = () => {
  const navigation = useNavigation();
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
  const jobTitleToScreenMap = {
    'Backend Developer': 'BackendDeveloper',
    'UI/UX Designer': 'UIUX',
    'Digital Marketer': 'DigitalMarketer',
    'Video Editor': 'VideoEditor',
    'Graphic Designer': 'GraphicDesigner',
    'Data Analyst': 'DataAnalyst',
    'Content Writer': 'ContentWriter',
    'Mobile App Developer': 'MobileAppDeveloper',
    'Frontend Developer': 'FrontendDeveloper',
    'Social Media Manager': 'SocialMedia',
  };

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
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => {
            const screenName = jobTitleToScreenMap[person.title];
            navigation.navigate(screenName, {
              job: {
                id: person.id,
                title: person.title,
                company: person.company,
                price: person.price,
                tags: person.tags,
                description: person.description,
              },
            });
          }}
        >
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
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.text}>Welcome to Nexura Connect</Text>
            </View>
          }
          renderItem={({ item }) => <Card person={item} />}
          contentContainerStyle={styles.scrollContent}
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
    padding: rfSpacing['16x'],
    paddingBottom: '23%',
  },
  headerContainer: {
    maxWidth: rfSpacing['220x'],
    marginLeft: rfSpacing['22x'],
    marginBottom: rfSpacing['16x'],
  },
  text: {
    fontSize: rfSpacing['28x'],
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
  },
  cardContainer: {
    borderRadius: rfSpacing['15x'],
    backgroundColor: '#1E293B',
    padding: rfSpacing['15x'],
    marginBottom: rfSpacing['15x'],
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rfSpacing['8x'],
  },
  jobTitle: {
    fontSize: rfSpacing['18x'],
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  priceText: {
    fontSize: rfSpacing['16x'],
    fontWeight: '800',
    color: '#ffffff',
  },
  companyName: {
    fontSize: rfSpacing['16x'],
    color: '#1CC4A0',
    marginBottom: rfSpacing['8x'],
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: rfSpacing['8x'],
  },
  tagItem: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    paddingVertical: rfSpacing['4x'],
    paddingHorizontal: rfSpacing['8x'],
    borderRadius: rfSpacing['12x'],
    fontSize: rfSpacing['12x'],
    marginRight: rfSpacing['6x'],
    marginBottom: rfSpacing['6x'],
  },
  descriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: rfSpacing['8x'],
  },
  descriptionText: {
    flex: 1,
    fontSize: rfSpacing['13x'],
    color: '#94A3B8',
    marginBottom: rfSpacing['12x'],
  },
  applyButton: {
    backgroundColor: '#1CC4A0',
    paddingVertical: rfSpacing['10x'],
    paddingHorizontal: rfSpacing['16x'],
    borderRadius: rfSpacing['15x'],
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: rfSpacing['14x'],
    fontWeight: 'bold',
  },
});
