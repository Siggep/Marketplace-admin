import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../utils/colors";
import Screen from "../components/Screen";
import firebase from "../components/Firebase/firebaseConfig";
import { auth } from "firebase";

function ListingsScreen({ navigation }) {
  const [positions, setPositions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firebase
      .firestore()
      .collection("listings")
      .where("uid", "==", firebase.auth().currentUser.uid)
      .onSnapshot((querySnaphot) => {
        const positions = [];
        querySnaphot.forEach((documentSnapshot) => {
          positions.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setPositions(positions);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={positions}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() =>
              navigation.navigate("Listing Details", {
                userkey: item.key,
              })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});

export default ListingsScreen;
