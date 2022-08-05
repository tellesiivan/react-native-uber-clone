import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tailwind from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RideOptionsCard() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind`flex-grow bg-white`}>
      <View style={tailwind`flex-1 p-3`}>
        <TouchableOpacity
          style={tailwind`h-10 w-10 items-center justify-center rounded-full bg-gray-100 absolute top-2 left-3 z-50`}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tailwind` text-xl text-center font-semibold`}>
          RideOptionsCard
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
