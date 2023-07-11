import { View, StyleSheet,Image } from "react-native"
import Home from './Home';
import AppBar from './AppBar';
import {Routes,Route} from 'react-router-native'
import QuestionsList from "./QuestionsList";


const Main = () => {
  return (
    <View style={styles.container}>
      
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<QuestionsList />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
   
  },
});

export default Main