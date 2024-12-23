import { useTopic } from "@/src/hooks/useTopic";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function TopicScreen() {
  const { topicId, category } = useLocalSearchParams();
  const router = useRouter();
  const { data: videos, isLoading, error } = useTopic(topicId as string);

  if (isLoading) {
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size={"large"}
        color={"#7E0601"}
      />
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-[#7E0601]">{error.message}</Text>
      </View>
    );
  }

  return (
    <View className="bg-[#E4E4E4]">
      <View className="w-full bg-[#A30700] flex items-start">
        <TouchableOpacity
          onPress={() => router.navigate(`/details/${category}`)}
          activeOpacity={0.5}
          className="px-4 py-2"
        >
          <FontAwesome6 name="angle-left" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <View className="p-6">
        <View className="flex-row justify-between">
          <Text className="text-2xl font-bold">{videos?.[0].topic}</Text>
          <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center -ml-8">
            <AntDesign name={"sound"} size={20} color={"white"} />
          </TouchableOpacity>
        </View>
        <Text className="text-[#858597] mb-6">{videos?.length} Videos</Text>
        <ScrollView showsVerticalScrollIndicator={false} className="mb-60">
          {videos?.map(({ id, length, title }) => (
            <TouchableOpacity
              key={id}
              onPress={() => {
                router.push(`/details/${category}/${topicId}/videos`);
              }}
            >
              <View key={id} className="mb-4 flex-row justify-between">
                <View className="flex-row space-x-2 items-center">
                  <TouchableOpacity className="w-10 h-10 rounded-full bg-[#7E0601] items-center justify-center">
                    <AntDesign name={"sound"} size={28} color={"white"} />
                  </TouchableOpacity>
                  <View>
                    <Text className="text-lg">{title}</Text>
                    <Text className="text-[#7E0601]">{length} mins</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
