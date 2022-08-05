import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import tailwind from "twrnc";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind`bg-white flex-1 `}>
      <View style={tailwind`px-3 relative flex-1`}>
        <Text
          style={tailwind`text-center py-4 text-xl tracking-wide font-semibold`}
        >
          Welcome, Ivan
        </Text>
        <View style={tailwind`border-t border-gray-200 flex-shrink `}>
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
        <View
          style={tailwind` absolute bottom-2 right-4 left-4 justify-center items-center flex-row pt-4  border-t border-gray-200`}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tailwind`bg-black w-24 px-4 py-3 rounded-full flex flex-row items-center justify-between`}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tailwind`text-white text-center `}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind` w-24 px-4 py-3 rounded-full flex flex-row items-center justify-between`}
          >
            <Icon name="car" type="font-awesome" color="black" size={16} />
            <Text style={tailwind`text-black text-center `}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
