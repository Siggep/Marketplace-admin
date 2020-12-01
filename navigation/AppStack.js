import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import StackNavigation from "../navigation/StackNavigation";

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stack"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
