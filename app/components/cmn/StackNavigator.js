import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrainerInfo from "../pt/TrainerInfo";
import OT from "../pt/OT";

const Stack = createStackNavigator();

export const PtStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TrainerInfo" component={TrainerInfo} options={{ headerShown: false }}/>
        <Stack.Screen name="OT" component={OT} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}