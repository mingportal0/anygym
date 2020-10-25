import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import MyDrawer from "./components/cmn/MyDrawer"

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
