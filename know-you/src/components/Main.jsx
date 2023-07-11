import { View, StyleSheet, Image } from "react-native";
import Home from "./Home";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";
import QuestionsList from "./QuestionsList";
import Tabs from "./Tabs";

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuestionsList />} />
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
