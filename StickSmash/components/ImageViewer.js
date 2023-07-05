import { StyleSheet, Image } from "react-native"

const ImageViewer = ({image}) => {
  return (
    <Image source={image} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: "100%",
    borderRadius: 18,
  },
});

export default ImageViewer