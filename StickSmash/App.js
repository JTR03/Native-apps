import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "./components/IconButton";
import CircleButton from "./components/CircleButton";
const PlaceholderImgae = require("./assets/images/background-image.png");

export default function App() {
  const [showOptions, setShowoptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowoptions(true);
    } else {
      alert("You did not select any image");
    }
  };

  const onReset = () => {
    setShowoptions(false);
  };

  const onAddSticker = () => {};

  const onSave = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer image={PlaceholderImgae} selectedImage={selectedImage} />
      </View>
      {showOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={"refresh"} label={"Reset"} onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon={"save-alt"} label={"Save"} onPress={onSave} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label={"Choose a photo"}
            theme={"primary"}
            onPress={pickImageAsync}
          />
          <Button
            label={"Use this photo"}
            onPress={() => setShowoptions(true)}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
