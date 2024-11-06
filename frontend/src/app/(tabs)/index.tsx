import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";

const IconButton = styled(TouchableOpacity);

export default function HomeScreen() {
  // Define topics with a unique color for each
  const topics = [
    { name: "Legal", icon: "balance-scale", color: "#F3722C", enabled: true },
    { name: "Transport", icon: "bus", color: "#577590", enabled: true },
    { name: "Medical", icon: "heartbeat", color: "#F9C74F", enabled: true },
    { name: "Professional Development", icon: "suitcase", color: "#90BE6D", enabled: true },
    { name: "General", icon: "bell", color: "#682388", enabled: true },
  ];

  return (
    <View className="flex-1 bg-white p-4">

      <Text className="text-2xl font-bold text-red-900 mb-4">All Topics</Text>
      
      <View className="flex-wrap flex-row justify-between">
        {topics.map((topic, index) => (
          <View key={index} className="items-center m-2 w-24">
            <IconButton
              className="w-24 h-24 items-center justify-center rounded-lg"
              style={{
                backgroundColor: topic.enabled ? topic.color : "#D3D3D3", // Default gray if disabled
              }}
              onPress={() => {

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
