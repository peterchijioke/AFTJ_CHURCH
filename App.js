import React, { Component } from "react";
// import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./screen/main/Main";
import Downloads from "./screen/downloads/Downloads";
import Sermon from "./screen/sermon/Sermon";
// import GoogleMap from "./screen/Location/GoogleMap";
import LocationPage from "./screen/Location/LocationPage";
import Projects from "./screen/Projects/Projects";
import NewMembers from "./screen/NewMembers/NewMembers";

export default class App extends Component {
  state = {};
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      // ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="location" component={LocationPage} />
          <Stack.Screen name="newMembers" component={NewMembers} />
          <Stack.Screen name="projects" component={Projects} />
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="sermon" component={Sermon} />
          <Stack.Screen name="download" component={Downloads} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
