import React, { useState } from "react";
import { Text, Layout, Input, Button } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollView } from "react-native";
import { SimpleSelectBox } from "../cmn/ViewUtil";
import {getCurrentDate} from "../../components/cmn/DateUtil";

export const CreateUserForm = ({navigation, createUser}) => {
    const [user, setUser] = useState({
        userid : '',
        pw: '',
        pwcheck: '',
        username: '',
        birthday: new Date("2020-01-01"),
        sex: '',
        tel: '',
        height: '',
        weight: '',
    });


    const onSubmit = e => {
        e.preventDefault();
        console.log("onSubmit", user);
        user.birthday = getCurrentDate();
        //저장
        createUser(user);
        //초기화
        setUser({});
        //이동
    };

    let calendar = {
        year: [ "1991", "1992", "1993", "1994", "1995", 
                "1996", "1997", "1998", "1999", "2000", 
                "2001", "2002", "2003", "2004", "2005", 
                "2006", "2007", "2008", "2009", "2010"],
        month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        day: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
              "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
              "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        setBirthYear: function(year){
            let date = user.birthday;
            date.setFullYear(year);
            setUser({
                ...user,
                birthday: date
            })
        },
        setBirthMonth: function(month){
            let date = user.birthday;
            date.setMonth(month-1);
            setUser({
                ...user,
                birthday: date
            })
        },
        setBirthDay: function(day){
            let date = user.birthday;
            date.setDate(day);
            setUser({
                ...user,
                birthday: date
            })
        },
            
    };

    return (
    <ScrollView style={styles.container}>
        <Text style={styles.label}>아이디</Text>
        <Layout style={styles.row}>
            <Layout style={styles.column, {flex: 1.5}}>
                <Input
                    style={styles.input}
                    value={user.userid || ''}
                    onChangeText={(text) => setUser({ ...user, userid : text })}
                />
            </Layout>
            <Layout style={styles.column}>
                <Button style={styles.button}>
                    중복체크
                </Button>
            </Layout>
        </Layout>
        <Text style={styles.label}>비밀번호</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value={user.pw || ''}
                onChangeText={(text) => setUser({ ...user, pw : text })}
                secureTextEntry
            />
        </Layout>
        <Text style={styles.label}>비밀번호 확인</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value={user.pwcheck || ''}
                onChangeText={(text) => setUser({ ...user, pwcheck : text })}
                secureTextEntry
            />
        </Layout>
        <Text style={styles.label}>이름</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value={user.username || ''}
                onChangeText={(text) => setUser({ ...user, username : text })}
            />
        </Layout>
        <Text style={styles.label}>생년월일</Text>
        <Layout style={styles.row}>
            <Layout style={{flex: 1.5, flexDirection: 'column', padding: 5}}>
                {SimpleSelectBox("년", calendar.year, user.birthday.getFullYear().toString(), calendar.setBirthYear )}
            </Layout>
            <Layout style={styles.column}>
                {SimpleSelectBox("월", calendar.month, (user.birthday.getMonth()+1).toString(), calendar.setBirthMonth )}
            </Layout>
            <Layout style={styles.column}>
                {SimpleSelectBox("일", calendar.day, user.birthday.getDate().toString(), calendar.setBirthDay )}
            </Layout>
        </Layout>
        <Text style={styles.label}>성별</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value={user.sex || ''}
                onChangeText={(text) => setUser({ ...user, sex : text })}
                placeholder="성별"
            />
        </Layout>
        <Text style={styles.label}>휴대전화</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value={user.tel || ''}
                onChangeText={(text) => setUser({ ...user, tel : text })}
            />
        </Layout>
        <Text style={styles.label}>사진</Text>
        <Layout style={styles.row}>
            <Image
                style={styles.photo}
                source={require("../../assets/img/blankUser.png")}
            />
        </Layout>
        <Layout style={styles.row}>
            <Layout style={styles.column}>
                <Text style={styles.label}>키</Text>
                <Input
                    style={styles.input}
                    value={user.height || ''}
                    onChangeText={(text) => setUser({ ...user, height : text })}
                    placeholder="CM"
                />
            </Layout>
            <Layout style={styles.column}>
                <Text style={styles.label}>몸무게</Text>
                <Input
                    style={styles.input}
                    value={user.weight || ''}
                    onChangeText={(text) => setUser({ ...user, weight : text })}
                    placeholder="KG"
                />
            </Layout>
        </Layout>
        <Layout style={styles.row}>
            <Layout style={styles.column}>
                <Button style={styles.button} onPress={() => navigation.goBack()}>
                    뒤로
                </Button>
            </Layout>
            <Layout style={styles.column}>
                <Button style={styles.button} onPress={onSubmit}>
                    등록
                </Button>
            </Layout>
        </Layout>
        <Layout style={{marginBottom:50}}>
        </Layout>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    padding: 20,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 5
  },
  label: {
    marginBottom: 2,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
  photo: {
    flex: 1,
    height:200,
    borderWidth:2,
    borderColor:'#f0f0f0',
  },
});
