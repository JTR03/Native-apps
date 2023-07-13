import { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import Text from "./Text";
import QuestionItem from "./QuestionItem";
import AppBar from "./AppBar";
const src = require("../../assets/images/back.jpg");
import { questions } from "../data";

const QuestionsList = () => {
  const [answers, setAnswers] = useState([]);
  const listRef = useRef(null);
 
  const handleAnswer = (selectedOption) => {
    const options = questions.Affection.map(q => q.options)[answers.length];
    console.log(
      selectedOption
    );
    setAnswers([
      ...answers,
      Object.keys(options).find(
        (a) => options[a] === selectedOption
      ),
    ]);
    console.log(answers);
    handleNext();
  };

  const handleNext = () => {
    if (answers.length < questions.Affection.length - 1) {
      listRef.current.scrollToIndex({ index: answers.length + 1 });
    }
  };
  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFillObject]}>
        <Image
          source={src}
          style={[StyleSheet.absoluteFillObject]}
          blurRadius={5}
        />
      </View>
      <FlatList
        ref={listRef}
        data={questions.Affection}
        renderItem={({ item }) => (
          <QuestionItem questions={item} answer={handleAnswer} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default QuestionsList;
