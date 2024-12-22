import { Category, iconMap, iconType } from "@/types";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Stack, Tabs, useLocalSearchParams, useRouter } from "expo-router";

export default function DetailsLayout() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const categoryName = category as Category;
  const name = iconMap[categoryName]?.name;
  const type = iconMap[categoryName]?.type;

  const renderHeaderIcon = () => {
    if (type === iconType.Entypo) {
      return (
        <Entypo
          name={name as keyof typeof Entypo.glyphMap}
          size={56}
          color={"white"}
        />
      );
    } else {
      return (
        <FontAwesome
          name={name as keyof typeof FontAwesome.glyphMap}
          size={48}
          color={"white"}
        />
      );
    }
  };

  return (
    <>
      <Tabs.Screen
        options={{
          headerTitle: renderHeaderIcon,
        }}
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="[category]/index" />
        <Stack.Screen name="[category]/[topicId]/index" />
        <Stack.Screen
          name="[category]/[topicId]/videos/index"
          options={{
            animation: "slide_from_bottom",
          }}
        />
      </Stack>
    </>
  );
}
