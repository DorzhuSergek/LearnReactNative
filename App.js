import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Player from "./src/screen/Player";
import Team from "./src/screen/Team";
import News from "./src/screen/News";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="News"
          component={News}
          options={{
            // tabBarIcon: ({ tintColor }) => (
            //   <Image source={require("./assets/news.svg")} />
            // ),
            // tabBarIcon: require("./assets/news.svg"),
          }}
        />
        <Tab.Screen name="Players" component={Player} />
        <Tab.Screen name="Top Team" component={Team} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
