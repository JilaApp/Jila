import { useRouter } from "expo-router";
import { Text, View, SafeAreaView, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

export default function Videos() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <Text className="text-black mb-4">Hello, this is the new page</Text>
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <WebView
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/HDSnmiMlYSU" }}
        />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        className="mt-4"
      >
        <View className="h-12 w-12 bg-blue-400 flex items-center justify-center">
          <Text className="text-white">Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
