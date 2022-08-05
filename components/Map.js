import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tailwind from "twrnc";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const navigation = useNavigation();

  useEffect(() => {
    if (origin || destination) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
      });
    }

    // zoom and fit markets
  }, [destination, origin]);

  return (
    <View style={tailwind``}>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,

          longitudeDelta: 0.005,
        }}
        style={tailwind`h-full w-full relative`}
      >
        <TouchableOpacity
          style={tailwind`absolute h-14 w-14 rounded-full top-12 left-4 bg-white z-40 shadow-xl flex items-center justify-center`}
          onPress={() => navigation.goBack()}
        >
          <View>
            <Text style={tailwind`font-semibold text-slate-700`}>Back</Text>
          </View>
        </TouchableOpacity>

        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_KEY}
            strokeColor="black"
            strokeWidth={3}
          />
        )}

        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            identifier="origin"
            description={origin.description}
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            identifier="destination"
            description={destination.description}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
