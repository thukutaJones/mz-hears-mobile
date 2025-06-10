import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TypeField = ({
  handleOpenTypeofEmergeny,
  value,
  title,
  placeHolder,
  icon,
}: {
  handleOpenTypeofEmergeny: any;
  value: any;
  title: string;
  placeHolder?: boolean;
  icon: any;
}) => {
  return (
    <View className="my-2 w-full">
      <Text className={`text-sm font-JakartaSemiBold mb-1`}>{title}</Text>
      <View
        className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
      >
        <Image source={icon} className={`w-6 h-6 ml-4`} />
        <TouchableOpacity
          onPress={handleOpenTypeofEmergeny}
          className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
        >
          <Text
            numberOfLines={1}
            className={`${
              value?.name ? "text-black" : "text-gray-500 italic"
            } overflow-clip`}
          >
            {value?.name ? `${value?.name}` : placeHolder || title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeField;
