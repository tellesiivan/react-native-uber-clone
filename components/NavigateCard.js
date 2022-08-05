import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";
import PlacesAutocomplete from "./PlacesAutocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <Text
        style={tailwind`text-center py-4 text-xl tracking-wide font-semibold`}
      >
        Welcome, Ivan
      </Text>
      <View style={tailwind`border-t border-gray-200 flex-shrink px-2`}>
        <View style={tailwind`py-4`}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
            minLength={2}
            enablePoweredByContainer={false}
            styles={{
              container: {
                flex: 0,
                marginBottom: 10,
              },
              textInput: {
                height: 50,
                color: "#222",
                fontSize: 16,
                backgroundColor: "#f1f1f1",
                borderRadius: 100,
                paddingLeft: 14,
              },
            }}
            debounce={400}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
