import { useField } from "formik";
import { StyleSheet } from "react-native";
import TextInput from "./TextInput";
import Text from "./Text";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.error}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    marginTop: 5,
    color: "red",
  },
});

export default FormikTextInput;
