import React, {useState} from "react";
import { LoginForm } from "../components/cmn/LoginForm";
import { login } from '../assets/api/mock';
import { Layout, Text, Button, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { setToken, setLoginUser } from '../assets/api/token';

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
    .catch((err) => setErrorMessage(err.message));
  }
  return (
    <>
      <LoginForm onLogin={onLogin} onCreateUser={() => props.navigation.navigate('CreateUser')} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </>
  );
}
