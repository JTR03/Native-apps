import {View, StyleSheet,Text} from 'react-native'
import Constants from 'expo-constants'


const AppBar = () => {
  return (
    <View style={styles.container}>
        <Text>Rate Repo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})

export default AppBar