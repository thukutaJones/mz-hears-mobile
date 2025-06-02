import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const BusinessPersonLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#007BFF",
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: "white",
          backgroundColor: "white"
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color, focused }) => (
            <View className="items-center justify-center">
              <Entypo name="home" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color, focused }) => (
            <View className="items-center justify-center">
              <MaterialCommunityIcons name="history" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color, focused }) => (
            <View className="items-center justify-center">
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default BusinessPersonLayout;
