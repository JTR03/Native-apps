import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Language = ({language}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>{language}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
    flexGrow: 0,
  },
  text:{
    color: 'white',
    fontSize: 16,
    
  }
});

export default Language