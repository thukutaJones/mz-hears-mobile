import FacilitiesEmptyComponent from "@/components/home/FacilitiesEmptyComponent";
import HealthFacility from "@/components/home/HealthFacility";
import HomeTopBar from "@/components/home/HomeTopBar";
import SendEmergencyModal from "@/components/home/SendEmergencyModal";
import React, { useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [facility, setFacility] = useState<any>(null);

  const handleSignOut = async () => {};
  return (
    <SafeAreaView className="flex-1 h-full p-4 bg-slate-50">
      <HomeTopBar search={search} setSearch={setSearch} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          <HealthFacility handlePress={() => setFacility(item)} />
        )}
        keyExtractor={(item: any, index: number) => `facility-${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, gap: 20 }}
        ListEmptyComponent={() => (
          <FacilitiesEmptyComponent isLoading={isLoading} />
        )}
      />
      <SendEmergencyModal
        displayModal={
          facility !== undefined && facility !== null && facility !== ""
        }
        handleClose={() => setFacility(null)}
      />
      <StatusBar backgroundColor="#007BFF" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default home;
