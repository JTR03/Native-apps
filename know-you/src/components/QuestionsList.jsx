import { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import Text from "./Text";
import QuestionItem from "./QuestionItem";
import AppBar from "./AppBar";
const src = require("../../assets/images/back.jpg");
import { questions } from "../data";

const QuestionsList = () => {
  const [answers, setAnswers] = useState([]);
  const listRef = useRef(null);

  const handleAnswer = (selectedOption) => {
    const obj = questions.map((q) => q)[answers.length];
    console.log(obj);
    setAnswers([
      ...answers,
      {
        cat: obj.category,
        score: parseInt(
          Object.keys(obj.options).find(
            (a) => obj.options[a] === selectedOption
          )
        ),
        ans: selectedOption,
      },
    ]);
    console.log(answers);
    handleNext();
  };

  const handleNext = () => {
    if (answers.length < 3) {
      listRef.current.scrollToIndex({ index: answers.length + 1 });
    } else {
      calculate();
    }
  };
  const calculate = () => {
    let affection = 0;
    answers.map((a) =>
      a.cat === "Affection" ? (affection += a.score) : console.log(affection)
    );
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
        data={questions}
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
