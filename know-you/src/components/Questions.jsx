import { useState } from "react"
import { View, StyleSheet, Pressable } from "react-native"
import Text from "./Text"

const Questions = () => {
    const [answers, setAnswere] = useState([])
    const questions = [
      {
        id: 1,
        question: "Question 1",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      {
        id: 2,
        question: "Question 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      {
        id: 3,
        question: "Question 3",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
    ];
  return (
    <View>
        {questions.map(question => (
            <View key={question.id}>
                <Text>{question.question}</Text>
                {question.options.map(option=>(
                    <Pressable key={option}>
                        <Text>{option}</Text>
                    </Pressable>
                ))}
            </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})

export default Questions