import React from 'react';
import { Layout, Text, Card, Button } from '@ui-kitten/components';
import { View, Image } from 'react-native';

export default function TrainerInfo() {
    const cardHeader = (evaProps) => (
        <Layout {...evaProps}>
          <Text category='h6'>홍길동</Text>
          <Text category='s1'>트레이너</Text>
        </Layout>
      );
    
    const cardFooter = (evaProps) => (
        <Layout {...evaProps}>
            <Button>
                {evaProps => <Text {...evaProps} style={[evaProps.style]}>OT예약</Text>}
            </Button>
        </Layout>
    );

    const trainerInfo = () => {
        return (
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Card header={cardHeader} footer={cardFooter}>
                    <View>
                        <Image style={{width: 30, height: 30}} />
                    </View>
                    <View>
                        <Text>
                            이름: 홍길동{"\n"}
                            수상경력: 미스터코리아{"\n"}
                            수업소개: 근육단련{"\n"}
                        </Text>
                    </View>
                </Card>
            </Layout>
        );
    };
      
    return (
        trainerInfo()
    );
}