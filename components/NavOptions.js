import { FlatList, Text, View } from "react-native";
import React from "react";
import NavOption from "./NavOption";
import tw from "twrnc";

export default function NavOptions({}) {
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "453",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        scrollEnabled={false}
        style={tw`flex-row `}
        renderItem={({ item }) => <NavOption opt={item} />}
        keyExtractor={(option) => option.id}
      />
    </View>
  );
}
