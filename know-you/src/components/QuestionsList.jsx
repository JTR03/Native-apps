import { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import QuestionItem from "./QuestionItem";
const src = require("../../assets/images/back.jpg");
import { questions } from "../data";
import { useNavigate } from "react-router-native";
import Results from "./Results";

const QuestionsList = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [finish, setFinish] = useState(false)
  const listRef = useRef(null);

  const handleAnswer = (selectedOption) => {
    const obj = questions.map((q) => q)[answers.length];
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
    handleNext();
  };

  const handleNext = () => {
    if (answers.length < 5) {
      listRef.current.scrollToIndex({ index: answers.length + 1 });
    } else {
      setFinish(true)
      const needs = calculate()
      console.log(needs);
    }
  };
  const calculate = () => {
    const needs = {
      Affection: 0,
      "Domestic support": 0,
      "Financial support": 0,
      "Physical attractiveness": 0,
      "Honesty and openness": 0,
      "Recreational companionship": 0,
      "Intimate conversation": 0,
      "Sexual fulfillment": 0,
      "Family commitment": 0,
      Admiration: 0,
    };
    answers.map((a) => {
      switch (a.cat) {
        case "Affection":
          needs["Affection"] += a.score;
          break;
        case "Admiration":
          needs["Admiration"] += a.score;
          break;
        case "Domestic support":
          needs["Domestic support"] += a.score;
          break;
        case "Family commitment":
          needs["Family commitment"] += a.score;
          break;
        case "Sexual fulfillment":
          needs["Sexual fulfillment"] += a.score;
          break;
        case "Intimate conversation":
          needs["Intimate conversation"] += a.score;
          break;
        case "Recreational companionship":
          needs["Recreational companionship"] += a.score;
          break;
        case "Honesty and openness":
          needs["Honesty and openness"] += a.score;
          break;
        case "Physical attractiveness":
          needs["Physical attractiveness"] += a.score;
          break;
        case "Domestic support":
          needs["Domestic support"] += a.score;
          break;
        default:
          break;
      }
    });
    const sortNeeds = Object.entries(needs).sort((a, b) => b[1] - a[1]);
    return sortNeeds.map(([n]) => n);
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
      {finish ?  <Results />:<FlatList
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
      /> }
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
