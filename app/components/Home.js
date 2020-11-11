import React, {useState, useCallback} from "react";
import { View } from "react-native";
import { Layout, Text, Button, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { setToken, isLogin, setLoginUser, getLoginUser, } from '../assets/api/token';

export default function Home(props){
  const [state, setState] = useState({
    user: {}, hasLoadedUsers: false, userLoadingErrorMessage: "" 
  });

  const logout = async () => {
    console.log("logout");
    setState({ hasLoadedUsers: false, user: {} })
    await setToken("");
    await setLoginUser("");
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
      .catch(
        //handleUserLoadingError
      );
  }

  //유저 없을 시 로그인 화면으로 이동
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
      isLogin().then(function(res){
        console.log("isLogin==", res);
      })

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
        {state.user.userid === undefined ? null : (
          <View>
            <Text key={state.user.userid}>{state.user.username}님 환영합니다.</Text>
            {state.userLoadingErrorMessage ? (
              <Text>{state.userLoadingErrorMessage}</Text>
            ) : null}
            <Button onPress={logout} >Log out</Button>
          </View>
        )}
      </Layout>
    </>
  );
}
