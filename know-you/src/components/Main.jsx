import { View, StyleSheet, Image } from "react-native";
import Home from "./Home";
import { Routes, Route } from "react-router-native";
import QuestionsList from "./QuestionsList";
import Tabs from "./Tabs";
import Results from "./Results";

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuestionsList />} />
        <Route path="/results" element={<Results/>} />
      </Routes>
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8",
    // alignItems: 'center',
  },
});

export default Main;
