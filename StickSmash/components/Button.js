import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, View, Pressable, Text } from "react-native";

const Button = ({ label, theme, onPress }) => {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.btnContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={styles.btnIcon}
          />
          <Text style={[styles.btnLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.btnContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.btnLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnIcon: {
    paddingRight: 8,
  },
  btnLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
