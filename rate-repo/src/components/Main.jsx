import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import Language from "./Language";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
  },
});

export default Main;
