import { colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PickerModal = ({
  handleClose,
  data,
  displayModal,
  currentItem,
  title,
  handleSelectItem,
  isFetchingData,
}: {
  handleClose: any;
  data: any;
  displayModal: boolean;
  currentItem: any;
  title: string;
  handleSelectItem: any;
  isFetchingData: boolean;
}) => {
  const { height } = Dimensions.get("window");
  return (
    <Modal
      animationType="fade"
      visible={displayModal}
      transparent
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onPress={handleClose}
      >
        <View
          className="w-[90%] bg-white p-4 rounded-3xl"
          style={{ maxHeight: height / 1.5 }}
        >
          {isFetchingData ? (
            <View className="p-10">
              <ActivityIndicator size={"large"} />
            </View>
          ) : (
            <>
              <Text
                className="mt-4 text-xl font-semibold text-blue"
                numberOfLines={1}
              >
                {title}
              </Text>
              <View className="w-full border-b border-b-gray-700 mt-2" />
              <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
              >
                <View className="mt-4">
                  {data?.map((item: any, index: number) => (
                    <TouchableOpacity
                      key={index.toString()}
                      className="px-2 py-4 w-full mt-2 flex-row items-center justify-around border-2 border-l-4 border-t-gray-100 border-b-gray-100 border-r-gray-100 border-l-primary"
                      onPress={() => {
                        handleSelectItem(item);
                        handleClose();
                      }}
                    >
                      <Text className="text-base font-pregular w-[85%]">
                        {item?.name}
                      </Text>
                      {currentItem?.name === item?.name && (
                        <View className="w-[10%]">
                          <AntDesign
                            name="checkcircle"
                            size={25}
                            color={colors?.primary}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PickerModal;
