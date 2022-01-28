import React, { useEffect, useState } from "react";
import { Button, Text, View, Image, ImageBackground } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { gStyle } from "../style/gStyle";
import Player from '../screen/Player'
import axios from 'axios';

export default function Team({ navigation,route }) {
const imageUrl = "https://image.tmdb.org/t/p/w500";
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.params.overview}</Text>
      <Text>Дата релиза {route.params.release_date}</Text>
      
    </View>
  );
}
