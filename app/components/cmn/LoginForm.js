import React, {useState, useCallback} from "react";
import {View, StyleSheet} from "react-native";
import { Button, Input } from "@ui-kitten/components";
import { OpenModal } from "../cmn/OpenModal";
import { useFocusEffect } from "@react-navigation/native";

export const  LoginForm = ({onLogin}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputs, setInputs] = useState({
        userid: "",
        pw: ""
    });
    const {userid, pw} = inputs;

    const onChange = (id, value) => {
        //console.log(id, value);
        setInputs({
            ...inputs,
            [id]: value
        });
    }

    const loginAction = () => {
        //validation
        if(userid.length > 0 && pw.length > 0){
            setErrorMessage("");
            onLogin(userid, pw);
        }else{
            setErrorMessage("아이디나 비밀번호를 입력해주세요.");
        }
    }

    useFocusEffect(
        useCallback(() => {
          //When the screen is focused
          setInputs({
            ...inputs,
            userid: "",
            pw: ""
        });
    
          return () => {
            //When the screen is unfocused
          };
        }, [])
      );

    return (
        <View style={styles.container}>
            <Input
                style={styles.elem}
                value={userid}
                label='아이디'
                onChangeText={(value) => onChange("userid", value)}
            />
            <Input
                style={styles.elem}
                value={pw}
                label='비밀번호'
                secureTextEntry
                onChangeText={(value) => onChange("pw", value)}
            />
            <Button
                style={styles.elem}        
                onPress={loginAction}>
                로그인</Button>
            {errorMessage ? (<OpenModal onText={errorMessage} />) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        padding: 20,
    },
    elem: {
        width: "100%",
        margin: 5,
    },
});