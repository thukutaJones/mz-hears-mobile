import { images } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

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
      <View className="flex flex-row p-2 gap-2 bg-blue-50 rounded-lg">
        <Image source={images?.profileHolder} className="w-14 h-14 rounded-xl" />
        <View className="w-[70%]">
          <Text className="uppercase font-semibold">Moth Jones</Text>
          <Text className="text-xs text-green-600">Masm member</Text>
        </View>
      </View>
    </>
  );
};

export default TopBar;
