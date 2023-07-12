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
  const [answers, setAnswere] = useState([]);
  const listRef = useRef(null);
 
  const handleAnswer = (selectedOption) => {
    const id = questions[answers.length].id;
    setAnswere([...answers, { questionId: id, answer: selectedOption }]);
    console.log(id, questions[answers.length].question);
    handleNext();
  };

  const handleNext = () => {
    if (answers.length < questions.length - 1) {
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
