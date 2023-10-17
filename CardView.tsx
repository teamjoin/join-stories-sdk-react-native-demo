/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView } from "react-native";
import { JoinStories, JoinStoriesView, JoinStoriesCardView } from "@join-stories/react-native-widgets";

function App() {

  useEffect(() => {

    /**
     * Four listener available :
     *  - onStoryLoaded : launched when player is loaded
     *  - onStoryFetchError : event received when we have an issue from request
     *  - onStoryFetchEmpty : received empty stories
     *  - onStoryDismissed : player dismissed. Two state available : auto and manual
     */
    const playerListener = JoinStories.addPlayerListener(({listener: newListener, state: newState}) => {
      switch(newListener) {
        case "onStoryLoaded": {
          console.log("story loaded")
          break;
        }
        case "onStoryFetchError": {
          console.log("fetch error")
          break;
        }
        case "onStoryFetchEmpty": {
          console.log("fetch empty")
          break;
        }
        case "onStoryDismissed": {
          console.log("story dismissed:", newState)
          break;
        }
      }
    });

    return () => {
      playerListener.remove();
    }
  });

  const startStandAlonePlayer = () => {
    JoinStories.startStandAlonePlayer({
      alias: "widget-sdk-test-standalone",
      requestTimeoutInterval: 15,
      playerBackgroundColor: "#000133",
      playerStandaloneAnimationOrigin: "top",
      playerVerticalAnchor: "center",
      playerShowShareButton: false,
      playerClosingButton: true,
      playerHorizontalMargins: 30,
      playerCornerRadius: 10,
      playerProgressBarDefaultColor: "#002244",
      playerProgressBarFillColor: "#99AA00",
      playerProgressBarThickness: 4,
      playerProgressBarRadius: 8,
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      height: 40,
      width: 200,
      marginBottom: 20,
      backgroundColor: "grey",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    joinStoriesView: {
      width: Dimensions.get("window").width,
      height: 150
    },
    joinStoriesListView: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      width: Dimensions.get("window").width,
      height: 170
    },
    joinGridContainer: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
  }
  });

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <JoinStoriesCardView
                alias="widget-test-a"
                format="grid"
                spacing={8}
                column={2}
                constainerDimension={150}
                style={{
                  flex: 2,
                  width: Dimensions.get("window").width,
                  backgroundColor: 'red'
                }}
            />

            <View
                style={{
                    height: 100
                }}
            />
        </ScrollView>
      </SafeAreaView>
  );

}

export default App;
