import { StyleSheet, Image } from "react-native"

const ImageViewer = ({image,selectedImage}) => {
  const src = selectedImage ? {uri: selectedImage}:image
  return (
    <Image source={src} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer