import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";
import soundIcon from "@/assets/images/soundicon.png"; // Adjust path if needed

const IconButton = styled(TouchableOpacity);

export default function HomeScreen() {
  const topics = [
    { name: "Legal", icon: "balance-scale", color: "#F3722C", enabled: false },
    { name: "Transport", icon: "bus", color: "#577590", enabled: false },
    { name: "Medical", icon: "heartbeat", color: "#F9C74F", enabled: false },
    { name: "Professional Development", icon: "suitcase", color: "#90BE6D", enabled: false },
    { name: "General", icon: "bell", color: "#682388", enabled: false },
  ];

  const handleSoundIconPress = () => {
    // for once we have audio
  };

  return (
    <View className="flex-1 bg-white p-4">
      
      <View className="flex-row items-center justify-center mb-4">
        <TouchableOpacity onPress={handleSoundIconPress} className="mr-2">
          <Image source={soundIcon} className="w-7 h-7" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-red-900">All Topics</Text>
      </View>
      
      <View className="flex-wrap flex-row justify-between">
        {topics.map((topic, index) => (
          <View key={index} className="items-center m-2 w-24">
            <IconButton
              className="w-24 h-24 items-center justify-center rounded-lg"
              style={{
                backgroundColor: topic.enabled ? topic.color : "#D3D3D3", // Default gray if disabled
              }}
              onPress={() => {
                if (topic.enabled) {
                  // Handle button press
                }
              }}
              disabled={!topic.enabled}
            >
              <FontAwesome
                name={topic.icon as any}
                size={50}
                color={topic.enabled ? "white" : "gray"}
              />
            </IconButton>
            <Text className="text-center font-bold mt-2 text-gray-700">
              {topic.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
