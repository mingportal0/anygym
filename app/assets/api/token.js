import AsyncStorage from '@react-native-community/async-storage';
import { getAuthenticationToken } from './mock';

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@auth_token');

        return value;

        } catch (e) {
        console.log(e);
    }
};

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('@auth_token', token);
    } catch (e) {
        console.log(e);
    }
};

export const setLoginUser = async (user) => {
    try {
        await AsyncStorage.setItem('LoginUser', JSON.stringify(user));
    } catch (e) {
        console.log(e);
    }
};

export const getLoginUser = async () => {
    try {
        const value = await AsyncStorage.getItem('LoginUser');
        if (value !== null) {
            return JSON.parse(value);
        }
        } catch (e) {
        console.log(e);
    }
};

export const isLogin = async () =>{
    let res = await getToken();
    if( res=== getAuthenticationToken()){
        return true;
    }
    return false;
}