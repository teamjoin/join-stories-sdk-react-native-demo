/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView } from "react-native";
import { JoinStories, JoinStoriesView, JoinStoriesCardView } from "@join-stories/react-native-widgets";

export default function ThumbView() {

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
    }
  });

  return (
      <SafeAreaView style={styles.container}>
          <JoinStoriesView
              alias="widget-test-a"
              requestTimeoutInterval={15}
              fontName="EBGaramond-ExtraBold"
              labelColor="#FFFF80"
              thumbViewSpacing={32}
              withLabel
              loaderInnerViewWidth={2}
              loaderInnerViewColor={["#FF0055FF"]}
              loaderColors={["#FF0000AA", "#FF0033FF"]}
              loaderWidth={3}
              storyViewedIndicatorColor="#808080"
              storyViewedIndicatorAlpha={0.8}
              thumbViewOverlayColor="#4C4C4CBB" // UIColor(hex8: 0x4C4C4CBB)
              playerBackgroundColor="#330000AA"
              playerVerticalAnchor="center"
              playerShowShareButton={true}
              playerHorizontalMargins={10}
              playerCornerRadius={30}
              playerProgressBarDefaultColor="#FFFFFF"
              playerProgressBarFillColor="#026EDA"
              playerProgressBarThickness={4}
              playerProgressBarRadius={8}
              containerDimension={150}
              style={styles.joinStoriesView}
            />
      </SafeAreaView>
  );

}
