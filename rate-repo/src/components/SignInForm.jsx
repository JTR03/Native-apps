import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 letters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const GetInfo = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name={"username"} placeholder={"Username"} />
      <FormikTextInput
        name={"password"}
        placeholder={"Password"}
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.btn}>
        <Text color={"primary"}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignInForm = () => {
  const submit = () => {
    console.log("form submitted");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <GetInfo onSubmit={handleSubmit} />}
    </Formik>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.accent,
    alignItems: "center",
    padding: theme.padding.normal,
    borderRadius: theme.borderRadius.small,
  },
  container: {
    margin: 10,
  },
});

export default SignInForm;
