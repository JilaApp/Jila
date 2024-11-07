import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styled } from "nativewind";
import soundIcon from "@/assets/images/soundicon.png";

const IconButton = styled(TouchableOpacity);
export default function Resources() {

  const handleSoundIconPress = () => {
    // for once we have audio
  };

  const handleMorePress = () => {

  };

  return (
    <View className="flex-1 bg-gray-100 p-4">

      <View className="flex-row items-center justify-center mb-4">
        <TouchableOpacity onPress={handleSoundIconPress} className="mr-2">
          <Image source={soundIcon} className="w-7 h-7" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-red-900">Recursos</Text>
      </View>

      <View className="bg-white rounded-3xl p-4 m-2">
        <Text className="text-sm text-gray-800">This is the content</Text>
      </View>

      <TouchableOpacity onPress={handleMorePress} className="flex-row w-1/2 self-center items-center justify-center py-2 px-4 bg-red-800 rounded-3xl mt-3">
        <AntDesign name="plus" size={24} color="white" />
        <Text className="text-white font-bold text-xl ml-1">More</Text>
        </TouchableOpacity>

      </View>
  );
}
