import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tailwind from "twrnc";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import { useEffect, useRef } from "react";
import { setTravelTimeInfo } from "../slices/navSlice";

export default function Map() {
  const mapRef = useRef(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();

  useEffect(() => {
    if (origin || destination) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
      });
    }

    // zoom and fit markets
  }, [destination, origin]);

  useEffect(() => {
    if (origin || destination) {
      try {
        const calcDistance = async () => {
          const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`;
          const req = await fetch(URL);
          if (!req.ok) throw new Error("unable to fetch ");
          const res = await req.json();
          dispatch(setTravelTimeInfo(res.rows[0].elements[0]));
        };
        calcDistance();
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [GOOGLE_MAPS_KEY, origin, destination]);

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
