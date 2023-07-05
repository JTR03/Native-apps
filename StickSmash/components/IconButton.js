import { StyleSheet, Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconButton = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.iconBtn} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={"#fff"} />
      <Text style={styles.iconBtnLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconBtnLabel: {
    color: "#fff",
    marginTop: 12,
  },
});

export default IconButton;
