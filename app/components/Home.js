import React, {useState, useCallback} from "react";
import { View } from "react-native";
import { Layout, Text, Button, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { setToken, setLoginUser, getLoginUser, } from '../assets/api/token';

export default function Home(props){
  const [state, setState] = useState({
    user: {}, isLogin: false
  });

  const logout = async () => {
    console.log("logout");
    setState({ 
      ...state,
      isLogin: false, 
      user: {} 
    })
    await setToken("");
    await setLoginUser("");
    props.navigation.navigate("Home");
  };

  const loadUsers = async () => {
    getLoginUser()
      .then((res) => {
        if(res){
          setState({
            ...state,
            isLogin: true,
            user: res,
          })
        }
      })
      .catch((e) =>{
        //handleUserLoadingError
        console.log(e);
      });
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
        {state.isLogin? (
          <View>
            <Text key={state.user.userid}>{state.user.username}님 환영합니다.</Text>
            <Button onPress={logout} >Log out</Button>
          </View>
        ) : null}
      </Layout>
    </>
  );
}
