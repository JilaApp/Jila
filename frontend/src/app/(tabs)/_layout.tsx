import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import helpIcon from "@/src/images/help.png";
import resourcesIcon from "@/src/images/resources.png";
import homeIcon from "@/src/images/home.png";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "#7E0601",
          paddingTop: 32,
          paddingBottom: 32,
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
                <Image
                  className="h-8 w-8"
                  source={helpIcon}
                  style={{ tintColor: focused ? "#7E0601" : "black" }}
                />
              </View>
            );
          },
          headerTitle: () => (
            <Image
              source={helpIcon}
              className="w-12 h-12"
              style={{ tintColor: "white" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`w-12 h-12 rounded-full justify-center items-center mt-0.5 ${
                  focused ? "bg-white" : "bg-transparent"
                }`}
              >
                <Image
                  className="h-8 w-8"
                  source={homeIcon}
                  style={{
                    tintColor: focused ? "#7E0601" : "black",
                  }}
                />
              </View>
            );
          },
          headerTitle: () => <Image source={homeIcon} className="w-14 h-14" />,
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
                <Image
                  className="h-7 w-7"
                  source={resourcesIcon}
                  style={{ tintColor: focused ? "#7E0601" : "black" }}
                />
              </View>
            );
          },
          headerTitle: () => (
            <Image
              source={resourcesIcon}
              className="w-12 h-12"
              style={{ tintColor: "white" }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
