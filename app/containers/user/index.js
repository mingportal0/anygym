import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from "@expo/vector-icons";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import MenuCreateUser from "./MenuCreateUser";
import TermsOfService from "./TermsOfService";
import CreateNewUser from "./CreateNewUser";


const Stack = createStackNavigator();

export default function UserHome ({navigation}){
    const HomeAction = () => (
        <Entypo
            name="home"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Home")}
        />
        );
    const GoHome = () => <TopNavigationAction icon={HomeAction} />;

    return (
    <>
        <TopNavigation alignment="center" title="Anygym" accessoryLeft={GoHome} />
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="MenuCreateUser" component={MenuCreateUser}/>
            <Stack.Screen name="TermsOfService" component={TermsOfService} />
            <Stack.Screen name="CreateNewUser" component={CreateNewUser} />
        </Stack.Navigator>
    </>
    );
}