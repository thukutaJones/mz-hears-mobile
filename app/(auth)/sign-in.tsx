import CustomButton from '@/components/CustomeButton';
import InputField from '@/components/InputField';
import { icons } from '@/constants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

const SignUp = () => {
   const [form, setForm] = useState<any>({
    email: "",
    password: "",
  });

  const onSignInPress = async() => {

  }
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
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
            title="Sign In"
            onPress={onSignInPress}
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
  )
}

export default SignUp