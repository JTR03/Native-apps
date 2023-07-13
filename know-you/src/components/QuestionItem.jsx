import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import theme from "../theme";
import Text from "./Text";
const { width, height } = Dimensions.get("screen");

const QuestionItem = ({ questions, answer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions.question}</Text>
      {Object.values(questions.options).map((option) => (
        <Pressable key={option} style={styles.option} onPress={()=>answer(option)}>
          <Text style={styles.option}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.large,
    width: width,
    height: height,
  },
  question: {
    fontSize: theme.fontSizes.large,
    fontWeight: theme.fontWeight.bold,
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary,
  },
  option: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.medium,
    borderRadius: theme.spacing.small,
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary,
  },
});

export default QuestionItem;
