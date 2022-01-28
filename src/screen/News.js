import React, { useEffect, useState } from "react";
import { Button, ImageBackground, Text, View,TouchableOpacity } from "react-native";
import { FlatList,  TouchableWithoutFeedback } from "react-native-gesture-handler";
import { gStyle } from "../style/gStyle";
import axios from "axios";

export default function News({ navigation }) {
  // const newsUrl = "https://hltv-api.vercel.app/api/news.json";
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(newsUrl)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => alert.error)
  //     .finally(() => setLoading(false));
  // });
  const apiKey = "api_key=a2a43948250487de2a7d1bb3e774a2a1";
  const baseUrl = "https://api.themoviedb.org/3";
  const lang = "&language=ru";
  const apiUrl =
    baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey + lang;
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  var isDisable=false;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
    };
    fetchData();
  }, []);
  // var movies = Object.values(data).forEach((e) => Object.values(e)[1]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={gStyle.container}>
            <Text style={gStyle.title}>{item.title}</Text>
            <Text style={gStyle.text}>{item.description}</Text>
            <Text style={gStyle.time}>{item.time}</Text>
          </View>
        )}
      /> */}
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <View >
            <TouchableOpacity onPress={()=>navigation.navigate('Info',item)} > 
              <ImageBackground
                source={{uri:imageUrl + item.poster_path}}
                style={gStyle.imageBack}
              ></ImageBackground>
              <Text key={item.id}>Оценка зрителей {item.vote_average}</Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
