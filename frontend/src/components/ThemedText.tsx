import React from "react";
import { Text } from "react-native";
import { useThemeColor } from "@/src/hooks/useThemeColor";

type ThemedTextProps = {
  style?: object;
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  children?: React.ReactNode;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  children,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const variantClasses = {
    default: "text-base leading-6",
    defaultSemiBold: "text-base leading-6 font-semibold",
    title: "text-4xl font-bold leading-10",
    subtitle: "text-xl font-bold",
    link: "leading-7 text-base text-blue-600",
  };

  return (
    <Text style={[{ color }, style]} className={variantClasses[type]} {...rest}>
      {children}
    </Text>
  );
}
