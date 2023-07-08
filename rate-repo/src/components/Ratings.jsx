import { View, StyleSheet } from "react-native";
import Text from "./Text";

const Ratings = ({ ratings, text }) => {
  return (
    <View style={styles.container}>
      <Text heading>{ratings}</Text>
      <Text color={"secondary"}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    textAlign: "center",
    alignItems: "center",
  },
});

export default Ratings;
