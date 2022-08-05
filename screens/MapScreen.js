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
          style={tailwind`absolute h-14 w-14 rounded-full top-12 left-4 bg-white z-40 shadow-xl flex items-center justify-center`}
          onPress={() => navigation.goBack()}
        >
          <View>
            <Text style={tailwind`font-semibold text-black`}>Back</Text>
          </View>
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
