import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Button } from "react-native";
import React, { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function videos() {
  const router = useRouter();

  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
    return (
      <View className="flex-1 bg-gray-100 justify-center items-center">
        <Text className="text-black">Hello, this the new page</Text>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <YoutubePlayer height={300} play={playing} videoId={"pznY3NUZfFg"} />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
          <View className="h-12 w-12 bg-blue-400 flex items-center justify-center">
            <Text className="text-white">Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
}
