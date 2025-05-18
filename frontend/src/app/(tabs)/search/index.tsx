import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const EXPO_PUBLIC_API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!EXPO_PUBLIC_API_BASE_URL)
  throw new Error("Missing EXPO_PUBLIC_API_BASE_URL");

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const { topicId, category } = useLocalSearchParams();
  const router = useRouter();

  const handleSearch = async (text: string) => {
    setSearchTerm(text);

    if (text.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `${EXPO_PUBLIC_API_BASE_URL}/api/videos?searchTerm=${text}`
      );
      const data = await response.json();
      setVideos(data);
      console.log("Search Results:", data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <View className="flex-row items-center bg-gray-200 rounded-full px-4 py-2 mb-4">
        <AntDesign name="search1" size={20} color="gray" />
        <TextInput
          className="flex-1 ml-2 text-gray-700"
          placeholder="Search..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={() => setSearchTerm("")}>
            <AntDesign name="closecircle" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        onPress={() => handleSearch(searchTerm)}
        className="bg-[#7E0601] rounded-full py-2 px-4 items-center"
      >
        <Text className="text-white font-bold">Search</Text>
      </TouchableOpacity>

      <Text className="text-[#858597] mt-2 mb-4">{videos?.length} Videos</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-2">
        {videos
          ?.sort((a, b) =>
            (a as { title: string }).title.localeCompare(
              (b as { title: string }).title
            )
          )
          .map(({ id, length, title }, index) => (
            <View
              key={id}
              className="mb-4 flex-row justify-between items-center"
            >
              <View className="flex-row space-x-2 items-center">
                <TouchableOpacity className="w-10 h-10 rounded-full bg-[#7E0601] items-center justify-center">
                  <AntDesign name={"sound"} size={28} color={"white"} />
                </TouchableOpacity>
                <View>
                  <Text className="text-lg">{title}</Text>
                  <Text className="text-[#7E0601]">{length} mins</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/details/${category}/${topicId}/${index}`);
                }}
              >
                <AntDesign name="play" size={32} color={"#C74F4A"} />
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
