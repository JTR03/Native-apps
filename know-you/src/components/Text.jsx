import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const Text = ({ type, style, ...props }) => {
  const textStyle = [
    styles.text,
    type === "heading" && styles.heading,
    type === "button" && styles.btn,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: theme.fontSizes.extraLarge,
    fontWeight: theme.fontWeight.bold,
  },
  text: {
    fontSize: theme.fontSizes.normal,
    fontWeight: theme.fontWeight.normal,
    color: theme.colors.textPrimary,
  },
  btn: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.medium,
  },
});

export default Text;
