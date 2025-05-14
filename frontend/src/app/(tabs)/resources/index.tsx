import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function AudioEntry({
  label,
  phone,
  showLineBelow,
}: {
  label: string;
  phone: string;
  showLineBelow?: boolean;
}) {
  return (
    <View className="mt-6">
      <View className="flex-row space-x-2">
        <View className="items-center">
          {/* <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
            <AntDesign name="sound" size={20} color="white" />
          </TouchableOpacity> */}
          {/* {showLineBelow && (
            <View
              style={{
                width: 2,
                height: 60,
                backgroundColor: "#7E0601",
                marginTop: 2,
              }}
            />
          )} */}
        </View>
        <View className="justify-center flex-1">
          <Text className="text-lg font-bold text-gray-800">{label}</Text>
        </View>
      </View>
      <Text className="text-base font-medium text-gray-800 ml-10">{phone}</Text>
    </View>
  );
}

export default function Resources() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="flex-1 bg-gray-100">
      {/* Global Header */}
      <View className="flex-row items-center justify-center mb-4 relative p-4">
        <Text className="text-4xl font-bold text-[#7E0601]">Recursos</Text>
        {/* <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name="sound" size={20} color="white" />
        </TouchableOpacity> */}
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ width: screenWidth, padding: 16 }}>
          <View className="flex-row items-center justify-center mb-4 relative">
            <Text className="text-3xl font-bold text-[#7E0601]">
              Emergencia
            </Text>
            {/* <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name="sound" size={20} color="white" />
            </TouchableOpacity> */}
          </View>

          <View className="flex-1 bg-white rounded-2xl p-1 m-1 overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
            >
              <AudioEntry
                label="Police, Fire, Medical Emergencies"
                phone="Dial 911 for life-threatening situations"
                showLineBelow
              />
            </ScrollView>
          </View>
        </View>

        <View style={{ width: screenWidth, padding: 16 }}>
          <View className="flex-row items-center justify-center mb-4 relative">
            <Text className="text-3xl font-bold text-[#7E0601]">Shelters</Text>
            {/* <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name="sound" size={20} color="white" />
            </TouchableOpacity> */}
          </View>

          <View className="flex-1 bg-white rounded-2xl p-1 m-1 overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
            >
              <AudioEntry
                label="Strides Low Barrier Shelter (70 E Washington, Champaign)"
                phone="(217) 403-6150 — 50 beds for men, 14 for women. No sobriety/background check required."
                showLineBelow
              />
              <AudioEntry
                label="C-U at Home (309 S Neil St, Champaign)"
                phone="(217) 819-4569 — Mid-barrier program, shelter + case management (up to 18 months)"
                showLineBelow
              />
              <AudioEntry
                label="Emergency Shelter for Families"
                phone="(217) 328-3313 — Up to 30-day shelter for families with children under 18"
                showLineBelow
              />
              <AudioEntry
                label="Crisis Nursery"
                phone="Call: (217) 337-2730 | Text: (217) 636-4221 — Emergency childcare, support, diapers, formula"
                showLineBelow
              />
            </ScrollView>
          </View>
        </View>

        <View style={{ width: screenWidth, padding: 16 }}>
          <View className="flex-row items-center justify-center mb-4 relative">
            <Text className="text-3xl font-bold text-[#7E0601]">Food</Text>
            {/* <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name="sound" size={20} color="white" />
            </TouchableOpacity> */}
          </View>

          <View className="flex-1 bg-white rounded-2xl p-1 m-1 overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
            >
              <AudioEntry
                label="Daily Bread Soup Kitchen (116 N. First St, Champaign)"
                phone="(217) 356-7687 — Hot meals daily, 11:00 AM to 12:30 PM (dailybreadsoupkitchen.com)"
                showLineBelow
              />
              <AudioEntry
                label="Canteen Run (Mobile Truck)"
                phone="(217) 369-9344 — Mon/Tue/Thu 6:30–8:30 PM — food, drinks, blankets (cucanteenrun.org)"
                showLineBelow
              />
              <AudioEntry
                label="Jubilee Café (805 S. Sixth St, Champaign)"
                phone="(217) 344-5091 — Mondays 5:00 to 6:30 pm"
              />
            </ScrollView>
          </View>
        </View>

        <View style={{ width: screenWidth, padding: 16 }}>
          <View className="flex-row items-center justify-center mb-4 relative">
            <Text className="text-3xl font-bold text-[#7E0601]">
              Transportation
            </Text>
            {/* <TouchableOpacity className="absolute left-0 w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
              <AntDesign name="sound" size={20} color="white" />
            </TouchableOpacity> */}
          </View>

          <View className="flex-1 bg-white rounded-2xl p-1 m-1 overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
            >
              <AudioEntry
                label="MTD – Champaign-Urbana Mass Transit"
                phone="(217) 384-8188 — Public transit info and support"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
