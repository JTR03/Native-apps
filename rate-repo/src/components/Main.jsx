import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import Language from "./Language";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor:"#e1e4e8"
  },
});

export default Main;
