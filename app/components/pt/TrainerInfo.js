import React from 'react';
import { ApplicationProvider, Layout, Text, Card, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

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
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Card header={cardHeader} footer={cardFooter}>
                        <div>
                            <img src="profilePic.png" alt="프로필사진"/>
                        </div>
                        <div>
                            이름: 근육맨<br/>
                            수상경력: 미스터코리아<br/>
                            수업소개: 근육단련<br/>
                        </div>
                    </Card>
                </Layout>
            </ApplicationProvider>
        );
    };
      
    return (
        trainerInfo()
    );
}