import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import theme from '../theme';

const Language = ({language}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>{language}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    padding: 10,
    borderRadius: 5,
  },
  text:{
    color: 'white',
    fontSize: 16,
    
  }
});

export default Language