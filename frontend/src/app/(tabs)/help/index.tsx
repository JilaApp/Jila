import {
  Text,
  View,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Linking,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import { Video } from "@/types";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export default function help() {
  return (
    // <View className="flex-1 bg-gray-100 justify-center items-center">
    //   <Text className="text-black">Hello, this is the help page</Text>
    // </View>

    <View className="flex-1 h-full bg-[#E4E4E4] justify-center items-center py-4">
      {/* Header */}
      <View className="flex flex-row mb-5">
        <View>
          <Text className="text-black text-2xl font-bold">J¡la Demo</Text>
        </View>
      </View>
      <SafeAreaView className="flex-1 w-full">
        <WebView
          style={{ marginTop: Platform.OS === "ios" ? 20 : 0 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/tXlPRgp1zhY` }}
        />
      </SafeAreaView>
    </View>
  );
}
