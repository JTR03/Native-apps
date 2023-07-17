
import AppBar from './AppBar'
import { View } from 'react-native'
import Text from './Text'

const Results = ({needs}) => {
   
  return (
    <View>
    <AppBar label={'Your Results'}/>
    {needs.map((need, index) =>(
        <View key={index}>
            <Text>{need}</Text>
        </View>
    ))}
    </View>
  )
}

export default Results