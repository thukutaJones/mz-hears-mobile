import { facilityIcons } from "@/constants";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const HealthFacility = ({ handlePress }: { handlePress: any }) => {
  return (
    <TouchableOpacity
      className="w-full bg-white p-2 rounded-xl flex flex-row gap-2"
      onPress={handlePress}
    >
      <View className="h-[150px] w-[35%] flex items-center justify-center bg-[#007BFF] rounded-xl">
        <FontAwesome6 name="hospital" size={80} color="white" />
      </View>
      <View className="w-[60%] h-[150px] py-1 overflow-hidden">
        <Text className="text-lg uppercase font-semibold">Masm</Text>
        <View className="w-full flex flex-row items-center justify-between mt-2">
          <View className="flex flex-row items-center gap-2">
            {facilityIcons?.map((icon: any, index: number) => (
              <View key={index} className="flex flex-row items-center gap-1">
                <MaterialIcons name={icon?.icon} size={16} color="#007BFF" />
                <Text className="text-sm">{icon.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="h-1 bg-white mt-2 w-full border-b-2 border-gray-300" />
        <Text className="text-sm font-semibold mt-4">Locations</Text>
        <ScrollView
          className="w-full"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row items-center gap-2 max-w-full">
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
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default HealthFacility;
