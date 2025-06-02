import { icons } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import InputField from "./../InputField";

const HomeTopBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (query: string) => void;
}) => {
  return (
    <>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-2xl font-JakartaExtraBold">Welcome Moth👋</Text>
        <TouchableOpacity
          onPress={() => console.log("Sign Out")}
          className="justify-center items-center w-10 h-10 rounded-full bg-white"
        >
          <Image source={icons.out} className="w-4 h-4" />
        </TouchableOpacity>
      </View>

      <InputField
        icon={icons.search}
        label=""
        placeholder="Search facility"
        textContentType="name"
        value={search}
        onChangeText={(value: any) => setSearch(value)}
        containerStyle="bg-white shadow-md shadow-neutral-300"
      />

      <Text className="text-lg font-JakartaBold mb-3">Health Facilities</Text>
    </>
  );
};

export default HomeTopBar;
