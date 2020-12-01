import React from "react";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import { logout } from "../components/Firebase/firebase";

function LogoutButton() {
  const navigation = useNavigation();

  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Icon.Button
      name="ios-log-out"
      size={35}
      backgroundColor="white"
      color="black"
      onPress={handleSignOut}
    ></Icon.Button>
  );
}

export default LogoutButton;
