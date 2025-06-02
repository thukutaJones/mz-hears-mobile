import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";

type ImagePickerProps = {
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
  maxFiles?: number;
  type?: "rounded" | "default";
};

const AddPictureField = ({
  photos = [],
  setPhotos,
  maxFiles = 3,
  type = "default",
}: ImagePickerProps) => {
  const pickImages = async () => {
    if (photos.length >= maxFiles) {
      Alert.alert("Error", `You can only upload up to ${maxFiles} images.`);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedUris = result.assets.map((asset) => asset.uri);
      const total = photos.length + selectedUris.length;

      if (total > maxFiles) {
        Alert.alert("Error", `You can only upload up to ${maxFiles} images.`);
        return;
      }

      setPhotos([...photos, ...selectedUris]);
    }
  };

  const handleRemove = (index: number) => {
    photos.splice(index, 1);
    setPhotos(photos);
  };

  const getImageClasses = (): string =>
    type === "rounded"
      ? "w-[100px] h-[100px] rounded-full m-1"
      : "w-[45%] h-[100px] rounded-lg m-1";

  const getOverlayClasses = (): string =>
    type === "rounded"
      ? "absolute top-0 left-0 w-full h-full bg-black/30 rounded-full items-center justify-center"
      : "absolute top-0 left-0 w-full h-full bg-black/30 rounded-lg items-center justify-center";

  const getAddButtonClasses = (): string =>
    type === "rounded"
      ? "w-[100px] h-[100px] rounded-full border-2 border-dotted border-blue-500 bg-blue-100/30 items-center justify-center m-1"
      : "w-[45%] h-[100px] rounded-lg border-2 border-dotted border-blue-500 bg-blue-100/30 items-center justify-center m-1";

  return (
    <View className="flex-row flex-wrap">
      {photos.map((uri, index) => (
        <View key={index} className={getImageClasses()}>
          <Image
            source={{ uri }}
            className="w-full h-full object-cover rounded-lg"
          />
          <TouchableOpacity
            onPress={() => handleRemove(index)}
            className={getOverlayClasses()}
          >
            <MaterialIcons name="delete" size={30} color="red" />
          </TouchableOpacity>
        </View>
      ))}

      {photos.length < maxFiles && (
        <TouchableOpacity
          onPress={pickImages}
          className={getAddButtonClasses()}
        >
          <MaterialIcons name="add-photo-alternate" size={30} color="#007bff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddPictureField;
