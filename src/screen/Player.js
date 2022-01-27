import React from "react";
import { Button, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react/cjs/react.development";
import { gStyle } from "../style/gStyle";

export default function SettingsScreen({ navigation, route }) {
  const newsUrl = "https://hltv-api.vercel.app/api/teams.json";
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(newsUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert.error)
      .finally(() => setLoading(false));
  });
  // var player = Object.values(data).forEach((e) => Object.values(e)[4][1]);
  var player =data.map((item)=>item.players)
  // console.log(player)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={gStyle.container}>
            {/* <Text style={gStyle.title}>{player[item].fullname}</Text> */}
          </View>
        )}
      />
      {/* <Text>asdasd</Text> */}
    </View>
  );
}
