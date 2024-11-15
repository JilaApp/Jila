import { Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarStyle: {
          display: "none",
        },
        headerStyle: {
          backgroundColor: "#7E0601",
          height: 120,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <Entypo name="home" size={56} color={"white"} />,
        }}
      />
      <Tabs.Screen name="details/[category]" />
    </Tabs>
  );
}
