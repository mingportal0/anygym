import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>테스트 홈</Text>
                <Button title="트레이너 정보 보기" onPress={() => navigation.navigate('TrainerInfo')}/>
            </Layout>
        </ApplicationProvider>
    );
}