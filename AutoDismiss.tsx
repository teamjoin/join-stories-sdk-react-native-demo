import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { JoinStories, JoinStoriesCardView, JoinStoriesView } from '@join-stories/react-native-widgets';
import { useEffect } from 'react';

export default function AutoDismiss() {

  useEffect(() => {
    const playerListener = JoinStories.addPlayerListener(({ listener: newListener, link }) => {
      if (newListener === 'onStoryLinkClick') {
        JoinStories.dismissPlayer();
        console.log('story link :', link);
        //router.push('/card');
      }
    });

    setTimeout(() => {
      console.log('auto dismiss player after 10s');
      JoinStories.dismissPlayer();
    }, 10000);

    return () => {
      playerListener.remove();
    };
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Thumb view</Text>
        <JoinStoriesView alias="widget-test-a" style={styles.widget} />
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
  widget: {
    width: Dimensions.get("window").width,
    height: 150
  },
});
