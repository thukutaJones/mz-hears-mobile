import { images } from "@/constants";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const TopBar = () => {
  return (
    <>
      <View className="flex flex-row justify-between mt-4">
        <View className="">
          <Text className="text-gray-500 mb-2">Profile data:</Text>
          <AnimatedCircularProgress
            size={45}
            width={5}
            fill={30}
            tintColor="#007BFF"
            backgroundColor="#e5e7eb"
            rotation={0}
            lineCap="round"
          >
            {(fill: any) => (
              <Text className="text-sm font-bold text-gray-800">
                {Math.round(fill)}%
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
        <Image source={images.profileHolder} className="h-24 w-24 rounded-lg" />
        <View>
          <TouchableOpacity className="flex flex-row items-center gap-2">
            <Text className="text-primary font-semibold text-lg">Edit</Text>
            <Octicons name="pencil" color={"#007BFF"} size={18} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full mt-8">
        <Text className="text-center text-4xl font-bold">Moth Jones</Text>
        <Text className="text-gray-500 text-center mt-1">14 January, 2025</Text>
      </View>
    </>
  );
};

export default TopBar;
