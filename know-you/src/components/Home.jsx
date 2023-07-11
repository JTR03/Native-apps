import {View, StyleSheet, Pressable} from 'react-native'
import Text from './Text'
import theme from '../theme'

const Home = () => {
  return (
    <View style={styles.container}>
        <Text type={'heading'}>Welcome to App Name</Text>
        <Pressable style={styles.btnContainer}>
          <Text type={'button'}>Sign In</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer:{
    backgroundColor: theme.colors.accent,
    padding:theme.spacing.medium,
    borderRadius: theme.spacing.small
  }
})

export default Home