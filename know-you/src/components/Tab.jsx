import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Text from "./Text";


const Tab = ({ name, icon }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={34} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tab;
