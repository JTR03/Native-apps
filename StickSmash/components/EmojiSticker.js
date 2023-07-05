import { View, Image } from 'react-native'

const EmojiSticker = ({size, src}) => {
  return (
    <View style={{top: -350}}>
        <Image source={src} resizeMode='contain' style={{width: size, height: size}}/>
    </View>
  )
}

export default EmojiSticker