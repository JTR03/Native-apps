import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import Ratings from "./Ratings";
import Language from "./Language";

const RepositoryItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingsContainer}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: title.ownerAvatarUrl }} style={styles.img} />
        </View>
        <View style={styles.info}>
          <Text heading> {title.fullName}</Text>
          <Text color={"secondary"}>{title.description}</Text>
          <Language language={title.language} />
        </View>
      </View>
      <View style={styles.ratingsContainer}>
        <Ratings ratings={title.stargazersCount} text={"Stars"} />
        <Ratings ratings={title.forksCount} text={"Forks"} />
        <Ratings ratings={title.reviewCount} text={"Reviews"} />
        <Ratings ratings={title.ratingAverage} text={"Ratings"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "baseline",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  info: {
    alignItems: "baseline",
  },
  ratingsContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: {
    paddingHorizontal: 10,
  },
});

export default RepositoryItem;
