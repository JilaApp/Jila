import { Tabs } from "expo-router";
import { Text, Image } from "react-native";
import home from "@/src/images/house.png";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: () => <Text>Header</Text>,
        tabBarStyle: {
          backgroundColor: "#7E0601",
        },
        tabBarActiveTintColor: "#7E0601",
        headerStyle: {
          backgroundColor: "#7E0601",
          height: 120,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                style={{ height: 40, width: 40 }}
                source={require("@/src/images/house.png")}
              />
            );
          },
          title: "Home",
          headerTitle: () => <Image source={home} className="w-12 h-12" />,
        }}
      />
      <Tabs.Screen
        name="Resources"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                style={{ height: 40, width: 40 }}
                source={require("@/src/images/resources.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                style={{ height: 40, width: 40 }}
                source={require("@/src/images/help.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
