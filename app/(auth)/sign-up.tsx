import CustomButton from "@/components/CustomeButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <SafeAreaView className="flex-1 bg-white h-full p-4">
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 mt-20 ">
          <View className="w-full">
            <Text className="text-2xl text-black font-JakartaSemiBold">
              Create Your Account
            </Text>
          </View>
          <View className="">
            <InputField
              label="Name"
              placeholder="Enter name"
              icon={icons.person}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <InputField
              label="Email"
              placeholder="Enter email"
              icon={icons.email}
              textContentType="emailAddress"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              placeholder="Enter password"
              icon={icons.lock}
              secureTextEntry={true}
              textContentType="password"
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <CustomButton
              title="Sign Up"
              onPress={() => router.push("/(root)/home")}
              className="mt-6"
            />
            <Link
              href="/(auth)/sign-in"
              className="text-center text-general-200 mt-10"
            >
              Already have an account?{" "}
              <Text className="text-blue-600">Log In</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
