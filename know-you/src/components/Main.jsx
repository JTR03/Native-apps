import { View, StyleSheet } from "react-native"
import Home from './Home';
import AppBar from './AppBar';
import {Routes,Route} from 'react-router-native'
import Questions from "./Questions";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/results" element={<Questions />}/>
      </Routes>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
   
  },
});

export default Main