import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { Link } from "react-router-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AppBar = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text type={"heading"} style={{ flexGrow: 1 }}>
        {label}
      </Text>
      <Link to={"/settings"} >
        <MaterialIcons name="settings" size={34} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding:theme.spacing.large
  },
});

export default AppBar;
