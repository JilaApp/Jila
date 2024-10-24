import { Image, Platform, View, Text } from "react-native";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className="absolute bottom-0 left-0 h-44 w-72"
        />
      }
    >
      <View className="flex-row items-center gap-2">
        <Text>Welcome!</Text>
      </View>
      <View className="gap-2 mb-2">
        <Text>Step 1: Try it</Text>
        <Text>
          Edit <Text>app/(tabs)/index.tsx</Text> to see changes. Press{" "}
          <Text>{Platform.select({ ios: "cmd + d", android: "cmd + m" })}</Text>{" "}
          to open developer tools.
        </Text>
      </View>
      <View className="gap-2 mb-2">
        <Text>Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </View>
      <View className="gap-2 mb-2">
        <Text>Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run <Text>npm run reset-project</Text> to get a
          fresh <Text>app</Text> directory. This will move the current{" "}
          <Text>app</Text> to <Text>app-example</Text>.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}
