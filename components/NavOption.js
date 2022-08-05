import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function NavOption({ opt }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 items-start flex-auto rounded-md`}
      onPress={() => navigation.navigate(opt.screen)}
    >
      <Image
        source={{ uri: opt.image }}
        style={{ height: 120, width: 120, resizeMode: "contain" }}
      />
      <Text style={tw`mt-4 font-semibold text-black`}>{opt.title}</Text>
      <Icon
        type="antdesign"
        name="arrowright"
        color="white"
        style={tw`p-1 bg-black mt-5 rounded-full`}
      />
    </TouchableOpacity>
  );
}
