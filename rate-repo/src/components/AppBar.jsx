import {View, StyleSheet,Text} from 'react-native'
import Constants from 'expo-constants'


const AppBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Rate Repo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor:'#24292e'
    },
    text:{
        color: 'white'
    }
})

export default AppBar