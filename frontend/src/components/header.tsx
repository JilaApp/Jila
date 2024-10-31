import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { ImageSourcePropType } from "react-native";
import homeicon from '../assets/images/home.png'

interface HeaderTitleProps {
  headerTitle: string;
  icon?: ImageSourcePropType;
}

export const HeaderTitle = ({ headerTitle, icon }: HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
