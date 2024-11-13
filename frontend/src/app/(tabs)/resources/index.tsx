import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Resources() {

  return (
    <View className="flex-1 bg-gray-100 p-4">
      
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-3xl font-bold text-[#7E0601]">Recursos</Text>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <View className="bg-white rounded-2xl p-4 m-2">
        <Text className="text-sm text-gray-800">This is the content</Text>
      </View>

      <TouchableOpacity className="flex-row w-1/2 self-center items-center justify-center py-2 px-4 bg-red-800 rounded-3xl mt-3">
        <AntDesign name="plus" size={24} color="white" />
        <Text className="text-white font-bold text-xl ml-1">More</Text>
        </TouchableOpacity>

      </View>
  );
}
