import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { gStyle } from "../style/gStyle";
export default function News({ navigation }) {
  const newsUrl = "https://hltv-api.vercel.app/api/news.json";
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(newsUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert.error)
      .finally(() => setLoading(false));
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={gStyle.container}>
            <Text style={gStyle.title}>{item.title}</Text>
            <Text style={gStyle.text}>{item.description}</Text>
            <Text style={gStyle.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}
