import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "white",
    accent: "#0366d6",
    error: "#d73a4a",
  },
  fontSize: {
    body: 16,
    header: 20,
  },
  fonts: {
    default: "System",
    main: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
  padding: {
    normal: 10,
    large: 15,
    big: 20,
  },
  borderRadius: {
    small: 5,
    medium: 10,
    large: 15,
  },
};

export default theme;
