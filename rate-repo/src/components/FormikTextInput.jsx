import { useField } from "formik";
import { StyleSheet } from "react-native";
import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      {showError && <Text style={styles.error}>{meta.error}</Text>}
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    marginBottom: 5,
    color: theme.colors.error,
  },
});

export default FormikTextInput;
