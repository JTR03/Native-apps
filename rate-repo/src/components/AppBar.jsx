import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text color={"primary"} style={styles.text}>Repositories</Text>
        </Link>
        <Link to={"/signin"}>
          <Text color={"primary"} style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    padding: 10,
  },
});

export default AppBar;
