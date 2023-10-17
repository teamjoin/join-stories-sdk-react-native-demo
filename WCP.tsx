import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { JoinStories, JoinStoriesCardView, JoinStoriesView } from '@join-stories/react-native-widgets';
import { useState } from 'react';

export default function Wcp() {
  const [isTest, setIsTest] = useState(true);

  const startStandAlonePlayer = () => {
    JoinStories.startStandAlonePlayer({
      alias: 'test-sdk-wcp',
      customParameters: { isTest: isTest.toString() },
      requestTimeoutInterval: 15,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.paramContainer}>
          <TouchableOpacity onPress={() => setIsTest((prev) => !prev)} style={styles.button}>
            <Text style={styles.buttonText}>Change custom Parameter</Text>
          </TouchableOpacity>
          <Text>isTest: {isTest.toString()}</Text>
        </View>
        <Text style={styles.sectionTitle}>Standalone</Text>
        <TouchableOpacity onPress={startStandAlonePlayer} style={styles.button}>
          <Text style={styles.buttonText}>Standalone</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Thumb view</Text>
        <JoinStoriesView alias="test-sdk-wcp" customParameters={{ isTest: isTest.toString() }} />
        <Text style={styles.sectionTitle}>List view</Text>
        <JoinStoriesCardView alias="test-sdk-wcp" format="list" customParameters={{ isTest: isTest.toString() }} />
        <Text style={styles.sectionTitle}>Grid view</Text>
        <JoinStoriesCardView alias="test-sdk-wcp" format="grid" customParameters={{ isTest: isTest.toString() }} />
        <Text style={styles.sectionTitle}>Footer</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  paramContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#5C69FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#E8E8E8',
  },
});
