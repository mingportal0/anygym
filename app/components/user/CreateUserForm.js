import React from "react";
import { List, Text, Card, Layout, Input, Button } from "@ui-kitten/components";
import { View, Image, StyleSheet, ScrollView } from "react-native";

export const CreateUserForm = () => {

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.label}>아이디</Text>
        <Layout style={styles.row}>
            <Layout style={styles.column, {flex: 1.5}}>
                <Input
                    style={styles.input}
                    value=""
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
                value=""
                secureTextEntry
            />
        </Layout>
        <Text style={styles.label}>비밀번호 확인</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value=""
                secureTextEntry
            />
        </Layout>
        <Text style={styles.label}>이름</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value=""
            />
        </Layout>
        <Text style={styles.label}>생년월일</Text>
        <Layout style={styles.row}>
            <Layout style={styles.column}>
                <Input
                    style={styles.input}
                    value=""
                    placeholder="년"
                />
            </Layout>
            <Layout style={styles.column}>
                <Input
                    style={styles.input}
                    value=""
                    placeholder="월"
                />
            </Layout>
            <Layout style={styles.column}>
                <Input
                    style={styles.input}
                    value=""
                    placeholder="일"
                />
            </Layout>
        </Layout>
        <Text style={styles.label}>성별</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value=""
                placeholder="성별"
            />
        </Layout>
        <Text style={styles.label}>휴대전화</Text>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value=""
            />
        </Layout>
        <Layout style={styles.row}>
            <Layout style={styles.column, {flex: 1.5}}>
                <Input
                    style={styles.input}
                    value=""
                    placeholder="전화번호 입력"
                />
            </Layout>
            <Layout style={styles.column}>
                <Button style={styles.button}>
                    인증번호 받기
                </Button>
            </Layout>
        </Layout>
        <Layout style={styles.row}>
            <Input
                style={styles.input}
                value=""
                placeholder="인증번호를 입력하세요."
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
                    value=""
                    placeholder="CM"
                />
            </Layout>
            <Layout style={styles.column}>
                <Text style={styles.label}>몸무게</Text>
                <Input
                    style={styles.input}
                    value=""
                    placeholder="KG"
                />
            </Layout>
        </Layout>
        <Layout style={styles.row}>
            <Layout style={styles.column}>
                <Button style={styles.button}>
                    뒤로
                </Button>
            </Layout>
            <Layout style={styles.column}>
                <Button style={styles.button}>
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
