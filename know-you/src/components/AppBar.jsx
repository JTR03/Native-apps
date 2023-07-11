import Constants from "expo-constants";
import { View, StyleSheet,} from "react-native";
import theme from "../theme";
import Text from "./Text";
import { Link } from "react-router-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to={'/'}>
        <Text type={"button"}>Home</Text>
      </Link>
      <Link to={'/cat'}>
        <Text type={"button"}>Catagories</Text>
      </Link>
      <Link to={'results'}>
        <Text type={"button"}>Results</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.black,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AppBar;
