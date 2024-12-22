import { useVideos } from "@/src/hooks/useVideos";
import { categories, Category, iconMap, iconType, Video } from "@/types";
import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function DetailsScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const categoryName = category as Category;
  const name = iconMap[categoryName]?.name;
  const type = iconMap[categoryName]?.type;

  const { data: videos, isLoading, error } = useVideos(category as Category);

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

  const renderContent = (message: string) => (
    <View className="h-full">
      <Tabs.Screen
        options={{
          headerTitle: renderHeaderIcon,
        }}
      />
      <View className="w-full bg-[#A30700] flex items-start">
        <TouchableOpacity
          onPress={() => router.navigate("/(tabs)/(home)")}
          activeOpacity={0.5}
          className="px-4 py-2"
        >
          <FontAwesome6 name="angle-left" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex justify-center items-center h-full">
        <Text>{message}</Text>
      </View>
    </View>
  );

  if (
    typeof category !== "string" ||
    !categories.includes(category as Category)
  ) {
    return renderContent("Category Not Found");
  }

  if (isLoading) {
    return renderContent("Loading...");
  }

  if (error) {
    if (error.message === "404") {
      return renderContent("Videos Not Found");
    }
    return renderContent(error.message);
  }

  if (!videos || Object.keys(videos).length === 0) {
    return renderContent("No videos found");
  }

  return (
    <View className="bg-[#E4E4E4] h-full">
      <Tabs.Screen
        options={{
          headerTitle: renderHeaderIcon,
        }}
      />
      <View className="w-full bg-[#A30700] flex items-start">
        <TouchableOpacity
          onPress={() => router.navigate("/(tabs)/(home)")}
          activeOpacity={0.5}
          className="px-4 py-2"
        >
          <FontAwesome6 name="angle-left" size={36} color="white" />
        </TouchableOpacity>
      </View>
      {Object.entries(videos).map(([topic, id]) => (
        <View key={id} className="mb-4">
          <Text className="text-lg font-bold">{topic}</Text>
          <Text>{id}</Text>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => {
          router.push(`/details/${category}/videos`);
        }}
      >
        <View className="h-12 bg-blue-400 flex items-center justify-center">
          <Text className="text-white">Watch Video</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
