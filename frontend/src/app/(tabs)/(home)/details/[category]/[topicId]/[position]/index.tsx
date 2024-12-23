import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "@/types";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export default function Videos() {
  const { position, topicId } = useLocalSearchParams();
  const router = useRouter();
  const [videoData, setVideoData] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentPosition, setCurrentPosition] = useState<number>(
    parseInt(position as string, 10)
  );

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const storedVideos = await AsyncStorage.getItem(`videos_${topicId}`);
        if (storedVideos) {
          const parsedVideos = JSON.parse(storedVideos);
          setVideos(parsedVideos);
          setVideoData(parsedVideos[currentPosition]);
        }
      } catch (error) {
        console.error("Failed to retrieve videos from local storage", error);
      }
    };

    getVideoData();
  }, [topicId, currentPosition]);

  const handleNext = () => {
    if (currentPosition < videos.length - 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const handlePrev = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  if (!videoData) {
    return (
      <View className="flex-1">
        <ActivityIndicator size={"large"} color={"#7E0601"} />
      </View>
    );
  }

  return (
    <View className="flex-1 h-full bg-[#E4E4E4] justify-center items-center py-4">
      <Text className="text-black text-2xl font-bold">{videoData.title}</Text>
      <Text className="text-[#9393A3] mb-4 text-base">
        Click the button to get started
      </Text>
      <SafeAreaView className="flex-1 w-full">
        <WebView
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoData.link}` }}
        />
      </SafeAreaView>
      <View className="flex-row justify-between w-full px-10 mt-4">
        <TouchableOpacity onPress={handlePrev} disabled={currentPosition === 0}>
          <AntDesign
            name="arrowleft"
            size={38}
            color={`${currentPosition === 0 ? "gray" : "black"}`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <FontAwesome6 name="angle-down" size={38} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          disabled={currentPosition === videos.length - 1}
        >
          <AntDesign
            name="arrowright"
            size={38}
            color={`${
              currentPosition === videos.length - 1 ? "gray" : "black"
            }`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
