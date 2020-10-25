import React from "react";
import "react-native-gesture-handler";
import { Layout, Text, Button } from "@ui-kitten/components";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import TrainerInfo from "../pt/TrainerInfo";
import Home from "../Home";
import ExcerGuideList from "../../containers/ExcerGuideList";

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

export default function MyDrawer() {
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