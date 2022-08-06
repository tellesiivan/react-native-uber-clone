import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInfo } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5W8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

export default function RideOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelInfo = useSelector(selectTravelTimeInfo);

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
          Select a ride - {travelInfo?.distance?.text}
        </Text>
        <View style={tailwind`mt-6`}>
          <FlatList
            alwaysBounceVertical={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { id, title, multiplier, image }, item }) => (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={tailwind`flex-row items-center w-full ${
                  id === selected?.id ? "bg-black" : "bg-gray-200"
                } mb-2 rounded-md justify-between px-3`}
              >
                <Image
                  source={{ uri: image }}
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                />
                <View>
                  <Text
                    style={tailwind`text-md font-semibold ${
                      id === selected?.id ? "text-white" : "text-black"
                    }`}
                  >
                    {title}
                  </Text>
                  <Text
                    style={tailwind` ${
                      id === selected?.id ? "text-white" : "text-black"
                    }`}
                  >
                    {travelInfo?.duration.text} travel time
                  </Text>
                </View>
                <Text
                  style={tailwind`text-md font-semibold ${
                    id === selected?.id ? "text-white" : "text-black"
                  }`}
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "narrowSymbol",
                  }).format(
                    (travelInfo?.duration?.value *
                      SURGE_CHARGE_RATE *
                      multiplier) /
                      100
                  )}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={tailwind`flex-row justify-center `}>
            <TouchableOpacity
              disabled={!selected}
              style={tailwind`${
                !selected ? "bg-gray-200" : "bg-black"
              } py-3 w-60 px-4 rounded-full mt-2 `}
            >
              <Text
                style={tailwind`text-center text-md font-light ${
                  !selected ? "text-gray-700 " : "text-white "
                }`}
              >
                Choose {selected?.title}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
