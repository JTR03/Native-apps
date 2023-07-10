import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const TextInput = ({ style, error, ...props }) => {
  const inputStyle = [
    styles.input,
    error && styles.error
  ]
  return <NativeTextInput style={inputStyle} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.textSecondary,
    marginBottom:20,
    padding: theme.padding.normal,
    borderRadius: theme.borderRadius.small,
    borderWidth: 1,
  },
  error: {
    borderColor: theme.colors.error
  }
});
export default TextInput;
