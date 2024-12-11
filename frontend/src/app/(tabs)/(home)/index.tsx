import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Category, iconMap, iconType } from "@/types";

export default function HomeScreen() {
  const router = useRouter();

  const topics = Object.keys(iconMap).map((key) => {
    const category = key as Category;
    const { name: iconName, type, label, color } = iconMap[category];
    return {
      name: label,
      icon: iconName,
      color,
      enabled: true,
      type,
      onPress: () => router.replace(`./details/${category}`),
    };
  });

  const rows = [];
  for (let i = 0; i < topics.length; i += 3) {
    rows.push(topics.slice(i, i + 3));
  }

  return (
    <View className="flex-1 bg-[#E4E4E4] p-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-3xl font-bold text-[#7E0601]">All Topics</Text>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <View className="bg-[#D9D9D9] p-6 rounded">
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-between mb-4">
            {row.map((topic, index) => (
              <View key={index} className="items-center w-1/3">
                <TouchableOpacity
                  className={`w-16 h-16 items-center justify-center rounded-lg`}
                  style={{
                    backgroundColor: topic.enabled ? topic.color : "#D3D3D3",
                  }}
                  onPress={topic.onPress}
                  disabled={!topic.enabled}
                >
                  {topic.type === iconType.Entypo ? (
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
        ))}
      </View>
    </View>
  );
}
