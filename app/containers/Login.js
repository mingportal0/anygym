import React, {useState} from "react";
import { LoginForm } from "../components/cmn/LoginForm";
import { login } from '../assets/api/mock';
import { Text, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { setToken, setLoginUser } from '../assets/api/token';
import { Entypo } from '@expo/vector-icons';
import { OpenModal } from "../components/cmn/OpenModal";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const onLogin = async (userid, pw) => {
    //console.log("login param", userid, pw);
    setErrorMessage('');
    login(userid, pw)
    .then(async (res) => {
      await setToken(res.auth_token);
      await setLoginUser(res.loginUser);
      props.navigation.navigate('Home');
    })
    .catch((err) => {
      setErrorMessage(err.message);
    });
  }

  const HomeBtnIcon = () => (
    <Entypo
      name="home"
      size={24}
      color="black"
      onPress={() => props.navigation.navigate("Home")}
    />
  );

  const renderHomeBtn = () => (
    <TopNavigationAction icon={HomeBtnIcon} />
  );

  return (
    <>
      <TopNavigation
        alignment='center'
        title='Anygym'
        accessoryLeft={renderHomeBtn}
      />
      <LoginForm onLogin={onLogin} />
      {errorMessage ? (<OpenModal onText={errorMessage} />) : null}
    </>
  );
}
