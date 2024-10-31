import { Tabs } from "expo-router";
import { Text } from "react-native";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { HeaderTitle } from "@/src/components/header";

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
          height: 115
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: () => (
            <HeaderTitle 
              headerTitle="Home Page" 
              
            />
          ),
        }}
      />
    </Tabs>
  );
}
