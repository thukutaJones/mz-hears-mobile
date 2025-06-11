import CustomButton from "@/components/CustomeButton";
import InputField from "@/components/InputField";
import PickerModal from "@/components/PickerModal";
import { baseUrl, icons } from "@/constants";
import { userDataContext } from "@/context/userDataContext";
import { isValidEmail } from "@/util/isValidEmail";
import { isValidPhoneNumber } from "@/util/isValidPhoneNumber";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState<any>({
    fullName: "",
    email: "",
    password: "",
    sex: {},
    phoneNumber: "",
  });

  const [selectSexToggle, setSelectSexToggle] = useState<boolean>(false);
  const [fieldError, setFieldError] = useState<{
    field?: string;
    message?: string;
  }>({});
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [requestError, setRequestError] = useState<string>("");

  const { setUserData, setToken } = userDataContext();

  const handleSignUp = async () => {
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

    console.log("in2")


    if (!isValidEmail(form.email?.trim())) {
      setFieldError({
        field: "email",
        message: "Please provide a valid email",
      });
      return;
    }
    if (!isValidPhoneNumber(form.phoneNumber)) {
      setFieldError({
        field: "phoneNumber",
        message: "Please provide a valid phone number",
      });
      return;
    }
    if (form.password.length < 6) {
      setFieldError({
        field: "password",
        message: "Password must be at least 6 characters",
      });
      return;
    }

    setIsSigningUp(true);
    try {
      const res = await axios.post(`${baseUrl}/api/v1/auth/sign-up`, {
        ...form,
        role: "user",
        sex: form.sex?.name
      });

      console.log(res?.data)
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
    <SafeAreaView className="flex-1 bg-white h-full p-4">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          className="bg-white"
          contentContainerStyle={{ paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 mt-20">
            <View className="w-full">
              <Text className="text-2xl text-black font-JakartaSemiBold">
                Create Your Account
              </Text>
            </View>
            {requestError && (
              <View className="w-full p-2 bg-red-600 opacity-80 rounded-lg">
                <Text className=" text-white font-psemibold">
                  {requestError}
                </Text>
              </View>
            )}
            <View>
              <InputField
                label="Full name"
                placeholder="Enter name"
                icon={icons.person}
                value={form.fullName}
                onChangeText={(value) => setForm({ ...form, fullName: value })}
              />
              {fieldError.field === "fullName" && (
                <Text className="text-red-600">{fieldError.message}</Text>
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

              <View className="my-2 w-full">
                <Text className={`text-lg font-JakartaSemiBold mb-3`}>Sex</Text>
                <TouchableOpacity
                  className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 px-4 py-4`}
                  onPress={() => setSelectSexToggle(true)}
                >
                  <MaterialCommunityIcons
                    name="human-male-female"
                    color="gray"
                    size={22}
                  />
                  <Text className="font-JakartaSemiBold text-[15px] flex-1 text-left px-4 text-gray-500">
                    {form?.sex?.name || "Select sex"}
                  </Text>
                </TouchableOpacity>
              </View>
              {fieldError.field === "sex" && (
                <Text className="text-red-600">{fieldError.message}</Text>
              )}

              <InputField
                label="Phone number"
                placeholder="Enter phone number"
                icon={icons.phone}
                textContentType="telephoneNumber"
                keyboardType="numeric"
                value={form.phoneNumber}
                onChangeText={(value) =>
                  setForm({ ...form, phoneNumber: value.replace(/[^0-9]/g, "") })
                }
              />

              {fieldError.field === "phoneNumber" && (
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
                title={isSigningUp ? "Signing up..." : "Sign Up"}
                onPress={handleSignUp}
                className="mt-6"
                isLoading={isSigningUp}
                disabled={isSigningUp}
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
      </KeyboardAvoidingView>

      <PickerModal
        data={[{ name: "male" }, { name: "female" }]}
        title="Select sex"
        currentItem={form.sex}
        handleSelectItem={(sex: any) => setForm({ ...form, sex })}
        handleClose={() => setSelectSexToggle(false)}
        displayModal={selectSexToggle}
        isFetchingData={false}
      />
    </SafeAreaView>
  );
};

export default SignUp;
