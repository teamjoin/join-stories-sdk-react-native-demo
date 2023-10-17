import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView } from "react-native";
import { JoinStories } from "@join-stories/react-native-widgets";
import HomeScreen from './HomeScreen';
import ThumbView from './ThumbView';
import CardView from './CardView';
import DefaultView from './DefaultView';
import AutoDismiss from './AutoDismiss';
import WCP from './WCP';

const Stack = createStackNavigator();

const App = () => {

  const init = () => {
    JoinStories.init("join-test-sdk");
  };

  useEffect(() => {
    init();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ThumbView" component={ThumbView} />
        <Stack.Screen name="CardView" component={CardView} />
        <Stack.Screen name="DefaultView" component={DefaultView} />
        <Stack.Screen name="AutoDismiss" component={AutoDismiss} />
        <Stack.Screen name="WCP" component={WCP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
