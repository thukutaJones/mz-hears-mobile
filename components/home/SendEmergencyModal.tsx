import { baseUrl, icons } from "@/constants";
import { userDataContext } from "@/context/userDataContext";
import axios from "axios";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../CustomeButton";
import AddPictureField from "../EmergencyCard/AddPictureField";
import TopBar from "../EmergencyCard/TopBar";
import TypeField from "../EmergencyCard/TypeField";
import PickerModal from "../PickerModal";

interface FormValues {
  location: any;
  emergencyType: any;
  description: string;
  contactNumber: string;
  service: any;
  healthFacility: string;
  pictures: string[];
  facility: any;
}

interface Toggle {
  typeOfEmergency: boolean;
  typeOfService: boolean;
  facility: boolean;
}

const SendEmergencyModal = ({
  displayModal,
  handleClose,
}: {
  displayModal: boolean;
  handleClose: () => void;
}) => {
  const { userData } = userDataContext();

  const [formValues, setFormValues] = useState<FormValues>({
    location: {},
    emergencyType: {},
    description: "",
    contactNumber: "",
    service: {},
    healthFacility: "",
    pictures: [],
    facility: {},
  });
  const [toggle, setToggle] = useState<Toggle>({
    typeOfEmergency: false,
    typeOfService: false,
    facility: false,
  });
  const [services, setServices] = useState<any[]>([]);
  const [typeOfEmergencies, setTypeOfEmergencies] = useState<any[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isFetchingFacilities, setIsFetchingFacilities] =
    useState<boolean>(false);

  const [requestError, setRequestError] = useState<string>("");
  const [facilities, setFacilities] = useState<any[]>([]);

  const fetchFacilities = async () => {
    setIsFetchingFacilities(true);
    try {
      const res = await axios.get(`${baseUrl}/api/v1/facility/normalized`);
      setFacilities(res.data?.facilities);
    } catch (error) {
      setRequestError("Something went wrong!!! please try again");
    } finally {
      setIsFetchingFacilities(false);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  useEffect(() => {
    setServices(formValues.facility?.services);
    setTypeOfEmergencies(formValues.facility?.typeOfEmergencies);
  }, [formValues.facility]);

  const sendEmergency = async () => {
    setIsSending(true);
    setRequestError("");
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location access is required.");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const formData = new FormData();

      console.log(formValues.pictures[0]);
      formData.append("user", userData?._id);
      formData.append(
        "userLocationLongitude",
        location?.coords?.longitude?.toString()
      );
      formData.append(
        "userLocationLatitude",
        location?.coords?.latitude.toString()
      );
      formData.append("facility", formValues?.facility?._id);
      formData.append("service", formValues?.service?.name);
      formData.append("typeOfEmergency", formValues?.emergencyType?.name);
      // formValues.pictures.forEach((img: any, index: number) => {
      //   formData.append("photos", {
      //     uri: img,
      //     name: `photo_${index}.jpg`,
      //     type: "image/jpeg",
      //   } as any);
      // });
      const payload = {
        user: userData?._id,
        userLocationLongitude: location?.coords?.longitude?.toString(),
        userLocationLatitude: location?.coords?.latitude.toString(),
        facility: formValues?.facility?._id,
        service: formValues?.service?.name,
        typeOfEmergency: formValues?.emergencyType?.name,
      };
      await axios.post(`${baseUrl}/api/v1/emergency`, payload);
      handleClose();
    } catch (error: any) {
      console.log(error);
      setRequestError("Something went wrong!!! please try again");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Modal
      animationType="fade"
      visible={displayModal}
      transparent
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onPress={handleClose}
      >
        <Pressable className="w-full p-4">
          <ScrollView
            className="w-full"
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="w-full bg-white p-4 rounded-xl shadow-lg max-h-[95vh]">
              <TopBar handleClose={handleClose} name={userData?.fullName} />
              {requestError && (
                <View className="w-full p-2 bg-red-600 opacity-80 rounded-lg">
                  <Text className=" text-white font-psemibold">
                    {requestError}
                  </Text>
                </View>
              )}
              <View className="w-full mt-4">
                <TypeField
                  title="Facility"
                  value={formValues?.facility}
                  handleOpenTypeofEmergeny={() =>
                    setToggle({ ...toggle, facility: true })
                  }
                  icon={icons?.location}
                />
                {formValues?.facility?.name ? (
                  <>
                    <TypeField
                      title="Type of Emergency"
                      value={formValues?.emergencyType}
                      handleOpenTypeofEmergeny={() =>
                        setToggle({ ...toggle, typeOfEmergency: true })
                      }
                      icon={icons?.emergency}
                    />
                    <TypeField
                      title="Type of Service"
                      value={formValues?.service}
                      handleOpenTypeofEmergeny={() =>
                        setToggle({ ...toggle, typeOfService: true })
                      }
                      icon={icons?.service}
                    />
                  </>
                ) : (
                  <></>
                )}
                <Text className={`text-sm font-JakartaSemiBold mb-1 my-2`}>
                  Add Pictures (Optional)
                </Text>
                <AddPictureField
                  photos={formValues?.pictures}
                  setPhotos={(images: any) => {
                    setFormValues({ ...formValues, pictures: images });
                  }}
                />
                <CustomButton
                  title="Send Emergency"
                  className="mt-10"
                  onPress={sendEmergency}
                  disabled={isSending}
                  isLoading={isSending}
                />
              </View>
            </View>
          </ScrollView>
          <PickerModal
            title="Facility"
            displayModal={toggle?.facility}
            currentItem={formValues?.facility}
            handleSelectItem={(item: any) =>
              setFormValues({ ...formValues, facility: item })
            }
            isFetchingData={isFetchingFacilities}
            data={facilities}
            handleClose={() => setToggle({ ...toggle, facility: false })}
          />

          <PickerModal
            title="Type of Emergency"
            displayModal={toggle?.typeOfEmergency}
            currentItem={formValues?.emergencyType}
            handleSelectItem={(item: any) =>
              setFormValues({ ...formValues, emergencyType: item })
            }
            isFetchingData={false}
            data={typeOfEmergencies}
            handleClose={() => setToggle({ ...toggle, typeOfEmergency: false })}
          />
          <PickerModal
            title="Type of Service"
            displayModal={toggle?.typeOfService}
            currentItem={formValues?.service}
            handleSelectItem={(item: any) =>
              setFormValues({ ...formValues, service: item })
            }
            isFetchingData={false}
            data={services}
            handleClose={() => setToggle({ ...toggle, typeOfService: false })}
          />
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
};

export default SendEmergencyModal;
