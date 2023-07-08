import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const Text = ({ color, heading, style, ...props }) => {
  const textstyle = [
    styles.text,
    color === "secondary" && styles.textSecondary,
    color === "primary" && styles.primaryColor,
    heading && styles.heading,
    style,
  ];
  return <NativeText style={textstyle} {...props}/>;
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.body,
    fontWeight: theme.fontWeight.normal,
    fontFamily: theme.fonts.main,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
  primaryColor: {
    color: theme.colors.primary,
  },
  heading: {
    fontSize: theme.fontSize.header,
    fontWeight: theme.fontWeight.bold,
  },
});

export default Text;
