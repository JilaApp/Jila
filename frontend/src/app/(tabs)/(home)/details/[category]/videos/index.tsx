import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function videos() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <Text className="text-black">Hello, this is the new page</Text>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <View className="h-12 w-12 bg-blue-400 flex items-center justify-center">
          <Text className="text-white">Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
