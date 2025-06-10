import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SendEmergencyComponent = ({ handlePress }: { handlePress: any }) => {
  return (
    <View className="w-full h-[85vh] flex flex-col items-center justify-center">
      <Text className="text-4xl text-center font-JakartaSemiBold px-8">
        Emergency help needed?
      </Text>
      <Text className="mt-2 text-sm text-gray-500">
        Press the button below to send one
      </Text>
      <TouchableOpacity
        className="p-20 rounded-full mt-8 border-4 border-gray-300"
        style={{ backgroundColor: "rgba(220, 38, 38, 1)" }}
        onPress={handlePress}
      >
        <MaterialCommunityIcons name="car-emergency" color="white" size={80} />
      </TouchableOpacity>
    </View>
  );
};

export default SendEmergencyComponent;
