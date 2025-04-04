import { View, Text, TouchableOpacity} from "react-native";
import {AntDesign} from '@expo/vector-icons';

export default function Resources() {

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className ="flex-row items-center justify-center mb-4">
        <Text className="absolute left-0 text-3xl font-bold text-[#7E0601]">Recursos</Text>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>
    
      <View className="flex-row items-center justify-center mb-4">
        <Text className="text-3xl font-bold text-[#7E0601]">Emergencia</Text>
        <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 bg-white rounded-2xl p-9 m-1">
      <View className="items-center mt-6">
        <View className="flex-row items-center space-x-2">
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
        <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-800 text-center">
         Immediate Assistance Police, Fire, Medical Emergencies
        </Text>
        </View>

        <View className="mt-4 items-center">
          <Text className="text-xl font-bold text-gray-800">Número</Text>
          <Text className="text-xl font-bold text-gray-800">911</Text>
        </View>
      </View>
        <View className="flex-row items-center space-x-2">
        <TouchableOpacity className=" w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-gray-800">Carle Hospital</Text>
        </View>
        <Text className = "text-lg font-bold text-gray-800 ml-8">1. (217) 383-3311</Text>
        <View className="mt-6">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name={"sound"} size={20} color={"white"} />
          </TouchableOpacity>
          <Text className="text-3xl font-bold text-gray-800">OSF Medical Center</Text>
        </View>
        <Text className="text-lg font-bold text-gray-800 ml-8">• 217-337-2000</Text>
      </View>
    </View>


      </View>
  );
}
