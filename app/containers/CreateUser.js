import React, {useState} from "react";
import { CreateUserForm } from "../components/user/CreateUserForm";
import { createAccount } from '../assets/api/mock';

export default function CreateUser(props) {
    const createUser = () => {
        createAccount('test3', 'test3')
            .then((val) => {
                props.navigation.navigate('Home');
            })
            .catch((err) => console.log('error:', err.message));
    };
    
    return (
        <CreateUserForm oncreateUser={createUser} onLogin={() => props.navigation.navigate('Login')} />
      );
}