import { Tabs } from "expo-router";
import { Text, Image } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
          backgroundColor: "#7E0601"
        }   
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
             <Image 
                style={{height: 40, width: 40}} source={require('@/src/images/house.png')}
              />
            )
          }
        }}
      />
      <Tabs.Screen
        name="Resources"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
             <Image 
                style={{height: 40, width: 40}} source={require('@/src/images/resources.png')}
              />
            )
          }        
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (tabInfo) => {
            return (
             <Image 
                style={{height: 40, width: 40}} source={require('@/src/images/help.png')}
              />
            )
          }        
        }}
      />
    </Tab.Navigator>
  );
}
