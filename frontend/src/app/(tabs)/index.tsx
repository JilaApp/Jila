import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";

const IconButton = styled(TouchableOpacity);

export default function HomeScreen() {
  // Define topics directly in this file
  const topics = [
    { name: "Legal", icon: "balance-scale", enabled: false },
    { name: "Transportation", icon: "bus", enabled: false },
    { name: "Medical", icon: "heartbeat", enabled: false },
    { name: "Professional Development", icon: "suitcase", enabled: false },
    { name: "General", icon: "bell", enabled: false },
  ];

  return (
    <View className="flex-1 bg-white p-4">

      <View className="flex-row justify-center items-center h-24">
        <Text className="text-black font-normal text-xl">Empty space for Most Used</Text>
      </View>

      <Text className="text-2xl font-bold text-red-900 mb-4">All Topics</Text>
      
      <View className="flex-wrap flex-row justify-between">
        {topics.map((topic, index) => (
          <View key={index} className="items-center m-2 w-24">
            <IconButton
              className={`w-24 h-24 items-center justify-center rounded-lg ${
                topic.enabled ? "bg-blue-200" : "bg-gray-300"
              }`}
              onPress={() => {
                if (topic.enabled) {
                  alert(`Navigating to ${topic.name}`);
                }
              }}
              disabled={!topic.enabled}
            >
              <FontAwesome
                name={topic.icon as any}
                size={32}
                color={topic.enabled ? "white" : "gray"}
              />
            </IconButton>
            <Text className="text-center mt-2 text-gray-700">
              {topic.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
