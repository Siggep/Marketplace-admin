import React from "react";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";

function NavButton() {
  const navigation = useNavigation();
  return (
    <Icon.Button
      name="ios-menu"
      size={35}
      backgroundColor="white"
      color="black"
      onPress={() => {
        navigation.openDrawer();
      }}
    ></Icon.Button>
  );
}

export default NavButton;
