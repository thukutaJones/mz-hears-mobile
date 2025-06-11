import { icons } from "@/constants";
import React, { useState } from "react";
import {
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
  typeOfService: string;
  healthFacility: string;
  pictures: string[];
}

interface Toggle {
  typeOfEmergency: boolean;
  typeOfService: boolean;
}

const SendEmergencyModal = ({
  displayModal,
  handleClose,
}: {
  displayModal: boolean;
  handleClose: () => void;
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    location: {},
    emergencyType: {},
    description: "",
    contactNumber: "",
    typeOfService: "",
    healthFacility: "",
    pictures: [],
  });
  const [toggle, setToggle] = useState<Toggle>({
    typeOfEmergency: false,
    typeOfService: false,
  });
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
              <TopBar handleClose={handleClose} />
              <View className="w-full mt-4">
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
                  value={formValues?.typeOfService}
                  handleOpenTypeofEmergeny={() =>
                    setToggle({ ...toggle, typeOfService: true })
                  }
                  icon={icons?.service}
                />
                <Text className={`text-sm font-JakartaSemiBold mb-1 my-2`}>
                  Add Pictures (Optional)
                </Text>
                <AddPictureField
                  photos={formValues?.pictures}
                  setPhotos={(images: any) => {
                    setFormValues({ ...formValues, pictures: images });
                  }}
                />
                <CustomButton title="Send Emergency" className="mt-10" />
              </View>
            </View>
          </ScrollView>
          <PickerModal
            title="Type of Emergency"
            displayModal={toggle?.typeOfEmergency}
            currentItem={formValues?.emergencyType}
            handleSelectItem={(item: any) =>
              setFormValues({ ...formValues, emergencyType: item })
            }
            isFetchingData={false}
            data={[
              { name: "Heart Attack" },
              { name: "Stroke" },
              { name: "Severe Trauma (e.g. road accidents)" },
              { name: "Obstructed or Complicated Labor" },
              { name: "Severe Asthma Attack or Breathing Difficulty" },
              { name: "Severe Bleeding" },
              { name: "Seizures" },
              { name: "High Fever in Children" },
              { name: "Poisoning or Drug Overdose" },
              { name: "Suicidal Behavior or Mental Health Crisis" },
            ]}
            handleClose={() => setToggle({ ...toggle, typeOfEmergency: false })}
          />
          <PickerModal
            title="Type of Service"
            displayModal={toggle?.typeOfService}
            currentItem={formValues?.typeOfService}
            handleSelectItem={(item: any) =>
              setFormValues({ ...formValues, typeOfService: item })
            }
            isFetchingData={false}
            data={[
              { name: "Emergency and Trauma Care" },
              { name: "Outpatient Services" },
              { name: "Inpatient Care (including maternity and pediatrics)" },
              { name: "Maternal and Child Health Services" },
              { name: "Immunization Services" },
              { name: "Diagnostic and Laboratory Services" },
              { name: "Surgical Services (basic and emergency)" },
              { name: "Pharmaceutical Services" },
              { name: "Mental Health Support" },
              {
                name: "Preventive Services (e.g., health education, screenings)",
              },
            ]}
            handleClose={() => setToggle({ ...toggle, typeOfService: false })}
          />
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
};

export default SendEmergencyModal;
