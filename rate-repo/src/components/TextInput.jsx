import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const TextInput = ({ style, error, ...props }) => {
  return <NativeTextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.textSecondary,
    marginBottom:20,
    padding: theme.padding.normal,
    borderRadius: theme.borderRadius.small,
    borderWidth: 1,
  },
});
export default TextInput;
