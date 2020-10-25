import React from "react";
import "react-native-gesture-handler";
import { Layout, Text, Button } from "@ui-kitten/components";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ApplicationProvider } from "@ui-kitten/components";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import * as eva from "@eva-design/eva";
import TrainerInfo from "./components/pt/TrainerInfo";
import Home from "./components/Home";
import ExcerGuideList from "./containers/ExcerGuideList";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ExcerGuideList" component={ExcerGuideList} />
      <Drawer.Screen name="TrainerInfo" component={TrainerInfo} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
