import { View, Text, Image, StyleSheet } from "react-native";

const RepositoryItem = ({ title }) => {
  return (
    <View>
      <Image source={{ uri: title.ownerAvatarUrl }} style={styles.img} />
      <Text>Full name: {title.fullName}</Text>
      <Text>Description: {title.description}</Text>
      <Text>Language: {title.language}</Text>
      <Text>Stars: {title.stargazersCount}</Text>
      <Text>Forks: {title.forksCount}</Text>
      <Text>Reviews: {title.reviewCount}</Text>
      <Text>Rating: {title.ratingAverage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
  },
});

export default RepositoryItem;
