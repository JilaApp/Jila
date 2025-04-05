import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function AudioEntry({ label, phone, showLineBelow }: {
  label: string;
  phone: string;
  showLineBelow?: boolean;
}) {
  return (
    <View className="mt-6">
      <View className="flex-row space-x-2">
        <View className="items-center">
          <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
            <AntDesign name="sound" size={20} color="white" />
          </TouchableOpacity>
          {showLineBelow && (
            <View style={{ width: 2, height: 60, backgroundColor: '#7E0601', marginTop: 2 }} />
          )}
        </View>
        <View className="justify-center">
          <Text className="text-3xl font-bold text-gray-800">{label}</Text>
        </View>
      </View>
      <Text className="text-lg font-bold text-gray-800 ml-10">{phone}</Text>
    </View>
  );
}

export default function Resources() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="flex-1 bg-gray-100">
      {/* Global Header */}
      <View className="flex-row items-center justify-center mb-4 relative p-4">
        <Text className="absolute left-0 text-4xl font-bold text-[#7E0601]">  Recursos</Text>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name="sound" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {/* Page 1: Emergencia */}
        <View style={{ width: screenWidth, padding: 16 }}>
          <View className="flex-row items-center justify-center mb-4 relative">
            <Text className="text-3xl font-bold text-[#7E0601]">Emergencia</Text>
            <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name="sound" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* White Card with Vertical Scroll */}
          <View className="flex-1 bg-white rounded-2xl p-1 m-1 overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
            >
              {/* Emergency 911 Entry */}
              <View className="items-center mt-6">
                <View className="flex-row space-x-2">
                  <View className="items-center">
                    <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
                      <AntDesign name="sound" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{ width: 2, height: 60, backgroundColor: '#7E0601', marginTop: 2 }} />
                  </View>
                  <Text className="text-2xl font-bold text-gray-800 text-center">
                    Immediate Assistance Police, Fire, Medical Emergencies
                  </Text>
                </View>
                <View className="mt-4 items-center">
                  <Text className="text-xl font-bold text-gray-800">Número</Text>
                  <Text className="text-xl font-bold text-gray-800">911</Text>
                </View>
              </View>

              {/* Hospital Entries */}
              <AudioEntry label="Carle Hospital" phone="1. (217) 383-3311" showLineBelow />
              <AudioEntry label="OSF Medical Center" phone="• 217-337-2000" />
            </ScrollView>
          </View>
        </View>

        {/* Page 2: Food Info */}
        <View style={{ width: screenWidth, padding: 16 }}>
          <View className="flex-row items-center justify-center mb-4 relative">
            <Text className="text-3xl font-bold text-[#7E0601]">Food</Text>
            <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name="sound" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* White Card with Vertical Scroll */}
          <View className="flex-1 bg-white rounded-2xl p-1 m-1 overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
            >
              {/* General Food Info */}
              <View className="items-center mt-6">
                <View className="flex-row space-x-2">
                  <View className="items-center">
                    <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
                      <AntDesign name="sound" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{ width: 2, height: 60, backgroundColor: '#7E0601', marginTop: 2 }} />
                  </View>
                  <Text className="text-2xl font-bold text-gray-800 text-center">
                    Local Food Resources & Assistance
                  </Text>
                </View>
                <View className="mt-4 items-center">
                  <Text className="text-xl font-bold text-gray-800">Contact</Text>
                  <Text className="text-xl font-bold text-gray-800">123-456-7890</Text>
                </View>
              </View>

              {/* Specific Food Resource */}
              <AudioEntry label="Local Diner" phone="1. (123) 456-7890" />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
