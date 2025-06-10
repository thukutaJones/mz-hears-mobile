import { icons, images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HomeTopBar = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row gap-1 items-center">
        <Image
          source={images?.profileHolder}
          className="h-12 w-12 rounded-lg"
        />
        <View>
          <Text className="text-gray-500 text-xs">Moth Jones</Text>
          <Text className="text-green-600 text-sm">Masm member</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Sign Out")}
        className="justify-center items-center w-10 h-10 rounded-full bg-white"
      >
        <Image source={icons.out} className="w-4 h-4" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeTopBar;
