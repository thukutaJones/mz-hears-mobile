import HomeTopBar from "@/components/home/HomeTopBar";
import SendEmergencyComponent from "@/components/home/SendEmergencyComponent";
import SendEmergencyModal from "@/components/home/SendEmergencyModal";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sendEmergencyToggle, setSendEmergencyToggle] =
    useState<boolean>(false);

  const handleSignOut = async () => {};
  return (
    <SafeAreaView className="flex-1 h-full p-4 bg-slate-50">
      <HomeTopBar />
      <SendEmergencyComponent
        handlePress={() => setSendEmergencyToggle(true)}
      />
      <SendEmergencyModal
        displayModal={sendEmergencyToggle}
        handleClose={() => setSendEmergencyToggle(false)}
      />
      <StatusBar backgroundColor="#007BFF" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default home;
