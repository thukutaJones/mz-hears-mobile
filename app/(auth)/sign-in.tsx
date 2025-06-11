import CustomButton from "@/components/CustomeButton";
import InputField from "@/components/InputField";
import { baseUrl, icons } from "@/constants";
import { userDataContext } from "@/context/userDataContext";
import { isValidEmail } from "@/util/isValidEmail";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const SignIn = () => {
  const [form, setForm] = useState<any>({
    email: "",
    password: "",
  });

  const { setUserData, setToken } = userDataContext();

  const [fieldError, setFieldError] = useState<{
    field?: string;
    message?: string;
  }>({});
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [requestError, setRequestError] = useState<string>("");

  const handleSignIn = async () => {
    setFieldError({});
    setRequestError("");

    for (const key in form) {
      if (
        !form[key] ||
        (typeof form[key] === "object" && Object.keys(form[key]).length === 0)
      ) {
        setFieldError({ field: key, message: `${key} cannot be empty` });
        return;
      }
    }

    if (!isValidEmail(form.email?.trim())) {
      setFieldError({
        field: "email",
        message: "Please provide a valid email",
      });
      return;
    }

    setIsSigningUp(true);
    try {
      const res = await axios.post(`${baseUrl}/api/v1/auth/sign-in`, form);

      console.log(res?.data);
      const token = res?.data?.token;
      const user = res?.data?.user;

      if (token) {
        await AsyncStorage.setItem("token", token);
        setToken(token);
      }

      if (user) {
        setUserData(user);
      }

      router.replace("/(root)/home");
    } catch (error: any) {
      setRequestError(
        error?.response?.data?.message ||
          "Something went wrong!! Please try again"
      );
    } finally {
      setIsSigningUp(false);
    }
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          {requestError && (
            <View className="w-full p-2 bg-red-600 opacity-80 rounded-lg">
              <Text className=" text-white font-psemibold">{requestError}</Text>
            </View>
          )}
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          {fieldError.field === "email" && (
            <Text className="text-red-600">{fieldError.message}</Text>
          )}

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          {fieldError.field === "password" && (
            <Text className="text-red-600">{fieldError.message}</Text>
          )}

          <CustomButton
            title="Sign In"
            onPress={handleSignIn}
            isLoading={isSigningUp}
            disabled={isSigningUp}
            className="mt-6"
          />
          <Link
            href="/(auth)/sign-up"
            className="text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-blue-600">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
