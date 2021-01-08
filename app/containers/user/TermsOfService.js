import React, {useState} from "react";
import { Text, Layout, Button, CheckBox } from "@ui-kitten/components";
import { View, StyleSheet, ScrollView } from "react-native";
import { OpenModal } from "../../components/cmn/OpenModal";

export default function TermsOfService({ navigation }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [privacy, setPrivacy] = useState(false);
    const [gym, setGym] = useState(false);
    
    const onSubmit = e => {
        e.preventDefault();

        if(!privacy || !gym){
            setErrorMessage("이용 약관에 동의하셔야 합니다.");
        }else if(privacy && gym){
            navigation.navigate("CreateNewUser");
        }
        
    }

    return (
    <ScrollView style={styles.container}>
        <Layout style={styles.row}>
            <Text style={styles.title}>개인정보 이용 약관</Text>
        </Layout>
        <Layout style={styles.row}>
            <View style={styles.terms}>
                <ScrollView>
                    <Text style={{overflow: 'scroll'}}>
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </ScrollView>
            </View>
        </Layout>
        <Layout style={styles.row}>
            <Text>약관의 동의</Text><CheckBox checked={privacy} onChange={e => setPrivacy(e)}></CheckBox>
        </Layout>
        <Layout style={styles.row}>
            <Text style={styles.title}>헬스장 이용 약관</Text>
        </Layout>
        <Layout style={styles.row}>
        <View style={styles.terms}>
                <ScrollView>
                    <Text style={{overflow: 'scroll'}}>
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </ScrollView>
            </View>
        </Layout>
        <Layout style={styles.row}>
            <Text>약관의 동의</Text><CheckBox checked={gym} onChange={e => setGym(e)}></CheckBox>
        </Layout>
        <Layout style={styles.row}>
            <Layout style={styles.column}>
                <Button style={styles.button} onPress={() => navigation.goBack()}>
                    뒤로
                </Button>
            </Layout>
            <Layout style={styles.column}>
                <Button style={styles.button} onPress={onSubmit}>
                    다음
                </Button>
            </Layout>
        </Layout>
        <OpenModal text={errorMessage} onText={setErrorMessage} />
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
    terms: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});
