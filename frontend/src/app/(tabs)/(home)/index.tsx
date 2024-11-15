import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const topics = [
    {
      name: "Transport",
      icon: "bus",
      color: "#577590",
      enabled: true,
      onPress: () => {
        router.replace("./details/transport");
      },
    },
    { name: "Legal", icon: "balance-scale", color: "#9F2020", enabled: true },
    { name: "Medical", icon: "heartbeat", color: "#F9C74F", enabled: true },
    {
      name: "Career",
      icon: "suitcase",
      color: "#90BE6D",
      enabled: true,
    },
    {
      name: "Other",
      icon: "dots-three-horizontal",
      color: "#9C9C9C",
      enabled: true,
      type: "Entypo",
    },
  ];

  return (
    <View className="flex-1 bg-[#E4E4E4] p-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-3xl font-bold text-[#7E0601]">All Topics</Text>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <View className="flex-wrap flex-row justify-between bg-[#D9D9D9] p-6 rounded">
        {topics.map((topic, index) => (
          <View key={index} className="items-center m-2 w-16">
            <TouchableOpacity
              className={`w-16 h-16 items-center justify-center rounded-lg`}
              style={{
                backgroundColor: topic.enabled ? topic.color : "#D3D3D3",
              }}
              onPress={topic.onPress}
              disabled={!topic.enabled}
            >
              {topic.type === "Entypo" ? (
                <Entypo
                  name={topic.icon as keyof typeof Entypo.glyphMap}
                  size={37}
                  color={topic.enabled ? "white" : "gray"}
                />
              ) : (
                <FontAwesome
                  name={topic.icon as keyof typeof FontAwesome.glyphMap}
                  size={37}
                  color={topic.enabled ? "white" : "gray"}
                />
              )}
            </TouchableOpacity>
            <Text className="text-center font-bold mt-2 text-black">
              {topic.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
