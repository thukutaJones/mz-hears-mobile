import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const Account = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("mzikaHubToken");
      router.replace("/(auth)/sign-in");
    } catch (error) {
      Alert.alert("Something went wrong!!", "Please try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View className="w-full mt-10">
      <View className="rounded-3xl bg-gray-50 w-full px-4 py-6 mt-2">
        <TouchableOpacity className="flex-row gap-4 items-center">
          <AntDesign name="delete" size={25} color={"red"} />
          <Text className="text-red-600 text-lg">Delete Account</Text>
        </TouchableOpacity>
        <View className="border-b mt-4 border-gray-300 mb-4" />

        <TouchableOpacity
          className="flex-row gap-4 items-center"
          onPress={handleLogout}
          disabled={isLoading}
        >
          <AntDesign name="logout" color="blue" size={25} />
          <Text className="text-blue-600 text-lg">{isLoading ? "Logging out.." : "Logout"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
