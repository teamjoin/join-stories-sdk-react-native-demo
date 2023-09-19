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

  const init = () => {
    JoinStories.init("join-showcase");
  };

  useEffect(() => {
    init();

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
      flex: 1,
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
          <View style={styles.container}>
            <JoinStoriesView
              alias="widget-sdk-test-thumb"
              requestTimeoutInterval={15}
              fontName="Arial"
              labelColor="#00AA80"
              thumbViewSpacing={16}
              loaderInnerViewWidth={2}
              withLabel
              loaderInnerViewColor={["#000000"]}
              loaderColors={["#FF8000", "#AA00FF"]}
              loaderWidth={3}
              storyViewedIndicatorColor="#808080"
              storyViewedIndicatorAlpha={0.8}
              thumbViewOverlayColor="#1F1F1F"
              playerBackgroundColor="#00AA0033"
              playerVerticalAnchor="bottom"
              playerShowShareButton={false}
              playerClosingButton={true}
              playerHorizontalMargins={10}
              playerCornerRadius={30}
              playerProgressBarDefaultColor="#FFFFFF"
              playerProgressBarFillColor="#026EDA"
              playerProgressBarThickness={4}
              playerProgressBarRadius={8}
              containerDimension={150}
              style={styles.joinStoriesView}
            />
            
            <TouchableOpacity onPress={startStandAlonePlayer} style={styles.button}>
              <Text>StandaloneView</Text>
            </TouchableOpacity>
            
            <JoinStoriesCardView
              alias="widget-sdk-test-thumb"
              requestTimeoutInterval={15}
              cardSize={150}
              playerBackgroundColor="#330000AA"
              playerVerticalAnchor="center"
              playerShowShareButton={true}
              playerHorizontalMargins={10}
              playerCornerRadius={30}
              playerProgressBarDefaultColor="#FFFFFF"
              playerProgressBarFillColor="#026EDA"
              playerProgressBarThickness={4}
              playerProgressBarRadius={8}
              style={styles.joinStoriesListView}
            />
            
            <JoinStoriesCardView
              alias="widget-sdk-test-thumb"
              requestTimeoutInterval={15}
              format="grid"
              playerBackgroundColor="#330000AA"
              playerVerticalAnchor="center"
              playerShowShareButton={true}
              playerHorizontalMargins={10}
              playerCornerRadius={30}
              playerProgressBarDefaultColor="#FFFFFF"
              playerProgressBarFillColor="#026EDA"
              playerProgressBarThickness={4}
              playerProgressBarRadius={8}
              style={styles.joinGridContainer}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
  );

}

export default App;
