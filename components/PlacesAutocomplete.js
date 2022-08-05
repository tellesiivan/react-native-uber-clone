import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

export default function PlacesAutocomplete() {
  return (
    <GooglePlacesAutocomplete
      placeholder="Where from"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
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
  );
}
