import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

function Card({ title, subTitle, propSize, room, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.information}>
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
            <Text style={styles.propSize} numberOfLines={2}>
              {propSize}
            </Text>
            <Text style={styles.room} numberOfLines={2}>
              {room}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  information: {
    flexDirection: "row",
  },
  subTitle: {
    color: "black",
    fontWeight: "bold",
    paddingRight: 10,
  },
  propSize: {
    color: "black",
    fontWeight: "bold",
    paddingRight: 10,
  },
  room: {
    color: "black",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
