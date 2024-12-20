import { Tabs } from "expo-router";
import { View } from "react-native";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "#7E0601",
          height: 90,
          paddingTop: 20,
        },
        headerStyle: {
          backgroundColor: "#7E0601",
          height: 120,
        },
      }}
    >
      <Tabs.Screen
        name="help/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`w-12 h-12 rounded-full justify-center items-center ${
                  focused ? "bg-white" : "bg-transparent"
                }`}
              >
                <Ionicons
                  name="help-circle-outline"
                  size={40}
                  color={focused ? "#7E0601" : "white"}
                />
              </View>
            );
          },
          headerTitle: () => (
            <Ionicons name="help-circle-outline" size={64} color={"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`w-12 h-12 rounded-full justify-center items-center mt-0.5 ${
                  focused ? "bg-white" : "bg-transparent"
                }`}
              >
                <Entypo
                  name="home"
                  size={36}
                  color={focused ? "#7E0601" : "white"}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="resources/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`w-12 h-12 rounded-full justify-center items-center ${
                  focused ? "bg-white" : "bg-transparent"
                }`}
              >
                <FontAwesome5
                  name="book-open"
                  size={27}
                  color={focused ? "#7E0601" : "white"}
                />
              </View>
            );
          },
          headerTitle: () => (
            <FontAwesome5 name="book-open" size={48} color={"white"} />
          ),
        }}
      />
    </Tabs>
  );
}
