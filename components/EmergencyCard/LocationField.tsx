import { icons } from "@/constants";
import * as Location from "expo-location";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const LocationField = ({
  value = {},
  handleSetLocation,
}: {
  value: any;
  handleSetLocation: any;
}) => {
  const handleGetLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location access is required.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log("User Location:", location);
      Toast.show({
        type: "success",
        text1: "Location added succesfully",
        position: "top",
      });
      handleSetLocation(location);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Something went wrong!",
        text2: "Please try again.",
        position: "top",
      });
    }
  };

  return (
    <View className="w-full">
      <View className="my-2 w-full">
        <Text className={`text-sm font-JakartaSemiBold mb-1`}>Location</Text>
        <View
          className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
        >
          <Image source={icons.location} className={`w-6 h-6 ml-4`} />
          <TouchableOpacity
            onPress={handleGetLocation}
            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
          >
            <Text
              className={`${
                value?.coords ? "text-black" : "text-gray-500 italic"
              }`}
            >
              {value?.coords
                ? `${value?.coords?.latitude}, ${value?.coords?.longitude}`
                : "Press to enter location"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocationField;
