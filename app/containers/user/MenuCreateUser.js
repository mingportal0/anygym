import React from "react";
import { Layout, Button } from "@ui-kitten/components";
import { StyleSheet, ScrollView } from "react-native";

export default function MenuCreateUser({ navigation }) {

  return (
    <ScrollView style={styles.container}>
        <Layout style={styles.row}>
            <Button style={styles.button} onPress={() => navigation.navigate("TermsOfService")}>
                신규
            </Button>
        </Layout>
        <Layout style={styles.row}>
            <Button style={styles.button} onPress={() => navigation.navigate("CreateNewUser")}>
                재등록
            </Button>
        </Layout>
        <Layout style={styles.row}>
            <Button style={styles.button} onPress={() => navigation.navigate("CreateNewUser")}>
                트레이너
            </Button>
        </Layout>
    </ScrollView>
  );
}

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
    button: {
        width: '100%',
    },
});
