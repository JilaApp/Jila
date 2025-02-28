import { useVideos } from "@/src/hooks/useVideos";
import { categories, Category, iconMap, iconType } from "@/types";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function DetailsScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const categoryName = category as Category;
  const name = iconMap[categoryName]?.name;
  const type = iconMap[categoryName]?.type;

  const { data: topics, isLoading, error } = useVideos(category as Category);

  const capitalize = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

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
      <View className="flex-row space-x-2 p-6">
        {categories.includes(category as Category) && (
          <Text className="text-2xl font-bold">
            {capitalize(iconMap[category as Category].label)} Videos
          </Text>
        )}
        <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
          <AntDesign name={"sound"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center">
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"#7E0601"} />
        ) : (
          <Text className="text-lg text-[#7E0601]">{message}</Text>
        )}
      </View>
    </View>
  );

  if (category != "legal") {
    return renderContent("No topics found");
  }

  if (
    typeof category !== "string" ||
    !categories.includes(category as Category)
  ) {
    return renderContent("Category Not Found");
  }

  if (error) {
    if (error.message === "404") {
      return renderContent("No Topics Found");
    }
    return renderContent(error.message);
  }

  if (!topics || Object.keys(topics).length === 0) {
    return renderContent("No topics found");
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
          onPress={() => router.back()}
          activeOpacity={0.5}
          className="px-4 py-2"
        >
          <FontAwesome6 name="angle-left" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <View className="p-6">
        <View className="flex-row space-x-2 mb-6">
          <Text className="text-2xl font-bold">
            {capitalize(iconMap[category as Category].label)} Videos
          </Text>
          <TouchableOpacity className="w-8 h-8 rounded-full bg-[#7E0601] items-center justify-center">
            <AntDesign name={"sound"} size={20} color={"white"} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="mb-20">
          {Object.entries(topics).map(([topic, id]) => (
            <View key={id} className="mb-4 flex-row justify-between">
              <View className="flex-row space-x-2 items-center">
                <TouchableOpacity className="w-10 h-10 rounded-full bg-[#7E0601] items-center justify-center">
                  <AntDesign name={"sound"} size={28} color={"white"} />
                </TouchableOpacity>
                <Text className="text-lg">{topic}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/details/${category}/${id}`);
                }}
              >
                <FontAwesome6 name="angle-right" size={32} color="grey" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
