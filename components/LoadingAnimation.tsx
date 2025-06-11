import { ActivityIndicator, Modal, TouchableOpacity } from "react-native";

const LoadingAnimation = ({ displayModal }: { displayModal: boolean }) => {
  return (
    <Modal animationType="fade" visible={displayModal} transparent>
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <ActivityIndicator size={"large"} color={"green"} />
      </TouchableOpacity>
    </Modal>
  );
};

export default LoadingAnimation;
