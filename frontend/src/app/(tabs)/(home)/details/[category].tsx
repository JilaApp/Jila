import { useVideos } from "@/src/hooks/useVideos";
import { categories, Category, iconMap, iconType, Video } from "@/types";
import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button, TouchableOpacity } from "react-native";

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
          onPress={() => router.navigate("/(home)")}
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
    return renderContent("Not Found");
  }

  if (isLoading) {
    return renderContent("Loading...");
  }

  if (error) {
    return renderContent("Error");
  }

  if (videos.length === 0) {
    return renderContent("No videos found");
  }

  return (
    <View className="flex justify-center items-center bg-[#E4E4E4]">
      <Tabs.Screen
        options={{
          headerTitle: renderHeaderIcon,
        }}
      />
      <View className="w-full bg-[#A30700] flex items-start">
        <TouchableOpacity
          onPress={() => router.navigate("/(home)")}
          activeOpacity={0.5}
          className="px-4 py-2"
        >
          <FontAwesome6 name="angle-left" size={36} color="white" />
        </TouchableOpacity>
      </View>
      {videos.map((video: Video) => (
        <View key={video.id}>
          <View className="h-4" />
          <View className="flex items-center justify-center">
            <Text>ID: {video.id}</Text>
            <Text>Title: {video.title}</Text>
            <Text>Show: {video.show ? "true" : "false"}</Text>
            <Text>Type: {video.type}</Text>
            <Text>Length: {video.length} mins</Text>
            <Text>Link: {video.link}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
