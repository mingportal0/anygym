import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import { Button, Input } from "@ui-kitten/components";
import { OpenModal } from "../cmn/OpenModal";

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
    return (
        <View style={styles.container}>
            <Input
                value={userid}
                label='아이디'
                onChangeText={(value) => onChange("userid", value)}
            />
            <Input
                value={pw}
                label='비밀번호'
                secureTextEntry
                onChangeText={(value) => onChange("pw", value)}
            />
            <Button                
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
        alignItems: "center" 
    },
});
