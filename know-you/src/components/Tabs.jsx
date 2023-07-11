import { StyleSheet, View, Dimensions } from "react-native";
import Tab from "./Tab";
import { Link } from "react-router-native";
const { width } = Dimensions.get("screen");

const Tabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Link style={{ flexGrow: 1 }} to={"/"}>
          <Tab icon={"home"} name={"Explore"} />
        </Link>
        <Link style={{ flexGrow: 1 }} to={"/questions"}>
          <Tab icon={"pause"} name={"Questions"} />
        </Link>
        <Link style={{ flexGrow: 1 }} to={"/result"}>
          <Tab icon={"edit"} name={"Results"} />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    width: width,
  },
  options: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Tabs;
