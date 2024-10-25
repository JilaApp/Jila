import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-6">
        <Text>This screen doesn't exist.</Text>
        <Link href="/" className="mt-4 py-4">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
