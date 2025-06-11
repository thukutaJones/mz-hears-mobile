import Account from "@/components/profile/Account";
import TopBar from "@/components/profile/TopBar";
import UserDetails from "@/components/profile/UserDetails";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white p-4">
      <TopBar />
      <UserDetails />
      <Account />
    </SafeAreaView>
  );
};

export default Profile;
