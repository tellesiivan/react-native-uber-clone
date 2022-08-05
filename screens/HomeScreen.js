import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import PlacesAutocomplete from "../components/PlacesAutocomplete";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2`}>
        <Image
          style={{ width: 90, height: 90, resizeMode: "contain" }}
          source={{
            uri: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
          }}
        />
        <PlacesAutocomplete />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
