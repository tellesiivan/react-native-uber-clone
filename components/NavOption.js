import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

export default function NavOption({ opt }) {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 items-start rounded-md w-40`}
      onPress={() => navigation.navigate(opt.screen)}
      disabled={!origin}
    >
      <View style={tw`${!origin && "opacity-20"} `}>
        <Image
          source={{ uri: opt.image }}
          style={{ height: 120, width: 120, resizeMode: "contain" }}
        />
        <Text style={tw`mt-4 font-semibold text-black`}>{opt.title}</Text>
        <Icon
          type="antdesign"
          name="arrowright"
          color="white"
          style={tw`p-1 bg-black mt-5 rounded-full w-10 h-10 flex items-center justify-center`}
        />
      </View>
    </TouchableOpacity>
  );
}
