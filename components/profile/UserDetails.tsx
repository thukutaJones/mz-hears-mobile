import { Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const UserDetails = () => {
  return (
    <View className="w-full mt-10 flex flex-row flex-wrap">
      <View className="w-1/2 border border-gray-300 border-l-0 px-4 py-8 bg-white">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-500">Age:</Text>
          <Feather name="calendar" size={20} color="green" />
        </View>
        <Text className="text-3xl mt-4 font-semibold">
          28 <Text className="text-base">years</Text>
        </Text>
      </View>
      <View className="w-1/2 border border-gray-300 border-r-0 px-4 py-8 bg-white">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-500">Blood type:</Text>
          <SimpleLineIcons name="drop" size={20} color="red" />
        </View>
        <Text className="text-3xl mt-4 font-semibold">
          ORh+
        </Text>
      </View>
      <View className="w-1/2 border border-gray-300 border-l-0 px-4 py-8 bg-white">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-500">Height:</Text>
          <MaterialCommunityIcons name="human-male-height" size={20} color="blue" />
        </View>
        <Text className="text-3xl mt-4 font-semibold">
          155 <Text className="text-base">cm</Text>
        </Text>
      </View>
      <View className="w-1/2 border border-gray-300 border-r-0 px-4 py-8 bg-white">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-500">Weight:</Text>
          <Ionicons name="scale-outline" size={20} color="purple" />
        </View>
        <Text className="text-3xl mt-4 font-semibold">
          78 <Text className="text-base">kg</Text>
        </Text>
      </View>
    </View>
  );
};

export default UserDetails;
