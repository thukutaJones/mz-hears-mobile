import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Account = () => {
  return (
    <View className="w-full mt-10">
      <View className="rounded-3xl bg-gray-50 w-full px-4 py-6 mt-2">
        <TouchableOpacity className="flex-row gap-4 items-center">
          <AntDesign name="delete" size={25} color={"red"} />
          <Text className="text-red-600 text-lg">Delete Account</Text>
        </TouchableOpacity>
        <View className="border-b mt-4 border-gray-300 mb-4" />

        <TouchableOpacity className="flex-row gap-4 items-center">
          <AntDesign name="logout" color="blue" size={25} />
          <Text className="text-blue-600 text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
