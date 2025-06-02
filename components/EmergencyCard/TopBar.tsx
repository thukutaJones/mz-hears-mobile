import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TopBar = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <View className="flex flex-row items-center justify-between mb-4">
        <Text className="text-lg font-semibold text-black">Send Emergency</Text>
        <TouchableOpacity
          className="p-2 bg-red-100 rounded-full"
          onPress={handleClose}
        >
          <MaterialCommunityIcons name="close-thick" size={18} color="red" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row p-2 gap-2 bg-blue-100 rounded-lg">
        <View className="p-4 w-[30%] flex items-center justify-center bg-[#007BFF] rounded-xl">
          <FontAwesome6 name="hospital" size={25} color="white" />
        </View>
        <View className="w-[70%]">
          <Text className="text-lg uppercase font-semibold">Masm</Text>
          <View className="flex flex-row items-center gap-2 w-full flex-wrap">
            {["Zomba", "Lilongwe", "Mzuzu", "Blantyre"].map(
              (location, index) => (
                <View
                  key={index}
                  className="flex flex-row items-center gap-1 border px-2 py-1 rounded-full border-gray-300 max-w-[40%]"
                >
                  <MaterialIcons name="location-pin" size={14} color="gray" />
                  <Text
                    className="text-xs"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {location}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default TopBar;
