import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingsEditScreen from "../screens/ListingsEditScreen";
import NavButton from "../components/Icon.Button";
import LogoutButton from "../components/LogoutButton";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Lägg till ny enhet"
      component={ListingsEditScreen}
      options={{
        title: "Lägg till ny enhet",
        headerTitleAlign: "center",
        headerLeft: () => <NavButton />,
        headerRight: () => <LogoutButton />,
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = () => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Mina Enheter"
      component={ListingsScreen}
      options={{
        headerTitleAlign: "center",
        headerLeft: () => <NavButton />,
        headerRight: () => <LogoutButton />,
      }}
    />
    <DetailsStack.Screen
      name="Listing Details"
      component={ListingDetailsScreen}
      options={{ title: "Listing Detail" }}
    />
  </DetailsStack.Navigator>
);

export default function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Stack">
      <Drawer.Screen name="Mina Enheter" component={DetailsStackScreen} />
      <Drawer.Screen name="Lägg till ny enhet" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}
