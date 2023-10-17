import React, { useEffect } from 'react';
import { View, Text, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { JoinStories, PlayerEvent } from '@join-stories/react-native-widgets';

const HomeScreen = ({ navigation }) => {

  const init = () => {
    console.log('index.tsx/init');
    JoinStories.init('join-test-sdk');
  };

  useEffect(() => {
    init();

    const playerListener = JoinStories.addPlayerListener((event: PlayerEvent) => {
      switch (event.listener) {
        case 'onStoryLoaded': {
          console.log('story loaded');
          break;
        }
        case 'onStoryFetchError': {
          console.log('fetch error');
          break;
        }
        case 'onStoryFetchEmpty': {
          console.log('fetch empty');
          break;
        }
        case 'onStoryDismissed': {
          console.log('story dismissed:', event.state);
          break;
        }
        case 'onStoryFetchSuccess': {
          console.log('story fetch success:');
          break;
        }
        case 'onStoryLinkClick': {
          console.log('story link :', event.link);
          break;
        }
      }
    });

    return () => {
      playerListener.remove();
    };
  }, []);

  const startStandAlonePlayer = () => {
    JoinStories.startStandAlonePlayer({
      alias: 'test-sdk-wcp',
      requestTimeoutInterval: 15,
      playerBackgroundColor: '#000133',
      playerStandaloneAnimationOrigin: 'top',
      playerVerticalAnchor: 'center',
      playerShowShareButton: false,
      playerClosingButton: true,
      playerHorizontalMargins: 30,
      playerCornerRadius: 10,
      playerProgressBarDefaultColor: '#002244',
      playerProgressBarFillColor: '#99AA00',
      playerProgressBarThickness: 4,
      playerProgressBarRadius: 8,
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: 40,
      width: 200,
      marginBottom: 20,
      backgroundColor: '#5C69FF',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#E8E8E8',
    },
  });
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThumbView')}>
            <Text style={styles.buttonText}>Thumb View</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CardView')}>
            <Text style={styles.buttonText}>Card View</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DefaultView')}>
            <Text style={styles.buttonText}>Default</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AutoDismiss')}>
            <Text style={styles.buttonText}>Auto Dismiss</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WCP')}>
            <Text style={styles.buttonText}>WCP</Text>
          </TouchableOpacity>

        </View>
    );
};

export default HomeScreen;
