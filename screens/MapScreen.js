import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import tailwind from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <View style={tailwind`h-1/2 relative`}>
        <TouchableOpacity
          style={tailwind`absolute h-12 w-12  rounded-full top-12 left-4 bg-white z-40 shadow-2xl flex items-center justify-center`}
          onPress={() => navigation.goBack()}
        >
          <Icon name="home-outline" type="ionicon" />
        </TouchableOpacity>

        <Map />
      </View>
      <View style={tailwind`h-1/2 bg-gray-100`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
