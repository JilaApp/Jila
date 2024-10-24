import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons
          size={310}
          name="code-slash"
          className="text-gray-500 absolute bottom-[-90px] left-[-35px]"
        />
      }
    >
      <Text>Explore page</Text>
    </ParallaxScrollView>
  );
}
