import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

const iconMap = {
  transport: { name: "bus", type: "FontAwesome" },
  legal: { name: "balance-scale", type: "FontAwesome" },
  medical: { name: "heartbeat", type: "FontAwesome" },
  career: { name: "suitcase", type: "FontAwesome" },
  other: { name: "dots-three-horizontal", type: "Entypo" },
};

const categories = [
  "transport",
  "legal",
  "medical",
  "career",
  "other",
] as const;
type Category = (typeof categories)[number];

export default function DetailsScreen() {
  const { type } = useLocalSearchParams();
  const router = useRouter();

  if (typeof type !== "string" || !categories.includes(type as Category)) {
    return (
      <View className="flex justify-center items-center">
        <Text>Not Found</Text>
        <Button title="Return" onPress={() => router.navigate("/(home)")} />
      </View>
    );
  }

  const category = type as Category;
  const icon = iconMap[category].name;
  const iconType = iconMap[category].type;

  return (
    <View className="flex justify-center items-center">
      <Tabs.Screen
        options={{
          headerTitle: () => (
            <>
              {iconType === "Entypo" ? (
                <Entypo
                  name={icon as keyof typeof Entypo.glyphMap}
                  size={37}
                  color={"white"}
                />
              ) : (
                <FontAwesome
                  name={icon as keyof typeof FontAwesome.glyphMap}
                  size={37}
                  color={"white"}
                />
              )}
            </>
          ),
        }}
      />
      <Button title="Return" onPress={() => router.navigate("/(home)")} />
    </View>
  );
}
