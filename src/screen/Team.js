import React, { useEffect, useState } from "react";
import { Button, Text, View, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { gStyle } from "../style/gStyle";
import Player from '../screen/Player'
import axios from 'axios';

export default function Team({ navigation }) {
  // const teamUrl = "https://hltv-api.vercel.app/api/teams.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
          'https://hltv-api.vercel.app/api/teams.json',
      );
      setData(result.data);
  };
  fetchData();
}, []);
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={gStyle.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Players',item)}>
              <Text style={gStyle.title}>{item.name}</Text>
              <Image source={item.logo} style={gStyle.image}></Image>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
