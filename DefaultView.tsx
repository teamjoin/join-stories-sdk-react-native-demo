import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { JoinStoriesCardView, JoinStoriesView } from '@join-stories/react-native-widgets';

export default function Default() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Thumb view</Text>
        <JoinStoriesView alias="widget-test-a" />
        <Text style={styles.sectionTitle}>Grid view</Text>
        <JoinStoriesCardView alias="widget-test-b" />
        <Text style={styles.sectionTitle}>Footer</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
});
