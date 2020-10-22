import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

export default function Home() {
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1'>테스트 홈</Text>
      </Layout>
    );
}