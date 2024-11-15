import { categories, Category, iconMap, iconType } from "@/types";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function DetailsScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  if (
    typeof category !== "string" ||
    !categories.includes(category as Category)
  ) {
    return (
      <View className="flex justify-center items-center">
        <Text>Not Found</Text>
        <Button title="Return" onPress={() => router.navigate("/(home)")} />
      </View>
    );
  }

  const categoryName = category as Category;
  const name = iconMap[categoryName].name;
  const type = iconMap[categoryName].type;

  return (
    <View className="flex justify-center items-center">
      <Tabs.Screen
        options={{
          headerTitle: () => (
            <>
              {type === iconType.Entypo ? (
                <Entypo
                  name={name as keyof typeof Entypo.glyphMap}
                  size={56}
                  color={"white"}
                />
              ) : (
                <FontAwesome
                  name={name as keyof typeof FontAwesome.glyphMap}
                  size={48}
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
