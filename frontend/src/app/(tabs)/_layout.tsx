import { Tabs } from "expo-router";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { Image } from "react-native";
import home from "@/assets/images/home.png";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#7E0601",
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7E0601",
          height: 120,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: () => (
            <Image source={home} style={{ width: 50, height: 50 }} />
          ),
        }}
      />
    </Tabs>
  );
}
