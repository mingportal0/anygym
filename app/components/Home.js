import React, {useState, useCallback} from "react";
import { Layout, Text, Button, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { setToken, getLoginUser } from '../assets/api/token';
import { useFocusEffect } from '@react-navigation/native';

export default function Home(props){
  const [state, setState] = useState({
    user: {}, hasLoadedUsers: false, userLoadingErrorMessage: "" 
  });

  const logout = async () => {
    console.log("logout");
    setState({ hasLoadedUsers: false, user: {} })
    await setToken("");
    props.navigation.navigate("Login");
  };

  const loadUsers = async () => {
    getLoginUser()
      .then((res) => {
        console.log("loadUsers", res);
        setState({
          hasLoadedUsers: true,
          user: res,
        })
      })
      .catch(handleUserLoadingError);
  }

  const handleUserLoadingError = (res) => {
    if (res.error === 401) {
      props.navigation.navigate("Login");
    } else {
      setState({
        hasLoadedUsers: false,
        userLoadingErrorMessage: res.message,
      });
    }
  }

  useFocusEffect(
    useCallback(() => {
      //When the screen is focused
      loadUsers();

      return () => {
        //When the screen is unfocused
        
      };
    }, [])
  );

  const DrawerMenuIcon = () => (
    <Ionicons name="md-menu" size={24} color="black" onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />
  );
  
  const renderDrawerMenu = () => (
    <TopNavigationAction icon={DrawerMenuIcon} />
  );

  
  return (
    <>
      <TopNavigation
        alignment='center'
        title='Anygym'
        accessoryLeft={renderDrawerMenu}
      />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text category="h1">테스트 홈</Text>
        <Text key={state.user.userid}>{state.user.userid}님 환영합니다.</Text>
        {state.userLoadingErrorMessage ? (
          <Text>{state.userLoadingErrorMessage}</Text>
        ) : null}
        <Button onPress={logout} >Log out</Button>
      </Layout>
    </>
  );
}
