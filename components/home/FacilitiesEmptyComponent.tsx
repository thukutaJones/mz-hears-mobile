import { images } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";

const FacilitiesEmptyComponent = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <View className="flex flex-col items-center justify-center">
      {isLoading ? (
        <View className="w-full flex flex-col gap-2">
          <View className="h-[20vh] w-full bg-gray-100 rounded-xl"></View>
          <View className="h-[20vh] w-full bg-gray-100 rounded-xl"></View>
          <View className="h-[20vh] w-full bg-gray-100 rounded-xl"></View>
          <View className="h-[20vh] w-full bg-gray-100 rounded-xl"></View>
        </View>
      ) : (
        <View className="flex flex-col h-[70vh] w-full items-center justify-center gap-2">
          <Image
            source={images.noResult}
            className="w-40 h-40"
            alt="No recent rides found"
            resizeMode="contain"
          />
          <Text className="text-xs">No health facilities found</Text>
        </View>
      )}
    </View>
  );
};

export default FacilitiesEmptyComponent;
