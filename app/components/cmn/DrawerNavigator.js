import React from "react";
import "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import * as StackNavigator from "./StackNavigator";
import Home from "../Home";
import ExcerGuideList from "../../containers/ExcerGuideList";
import CreateUser from "../../containers/user/CreateUser";
import Login from "../../containers/Login";
import LockerContainer from "../../containers/LockerContainer";

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

export default function DrawerNavigator() {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props}  />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ExcerGuideList" component={ExcerGuideList} />
      <Drawer.Screen name="TrainerInfo" component={StackNavigator.PtStack} />
      <Drawer.Screen name="CreateUser" component={CreateUser} />
      <Drawer.Screen name="Locker" component={LockerContainer} />
    </Drawer.Navigator>
  );
}