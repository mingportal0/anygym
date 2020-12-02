import React from 'react';
import { Layout, Text, Card, Button } from '@ui-kitten/components';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'

export default function TrainerInfo (props) {
    const dispatch = useDispatch();
    const trainers = useSelector((state) => state.pt.trainers);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            height: '100%'
        },
        card: {
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginVertical: 10
        },
        cardHeader: {
            width: 300,
            padding: 10
        }
    });
    
    const html = trainers.map((trainer) => {
        const cardHeader = (evaProps) => (
            <Layout {...evaProps} style={styles.cardHeader}>
            <Text category='h6'>{trainer.name}</Text>
            <Text category='s1'>트레이너</Text>
            </Layout>
        );
    
        const cardFooter = (evaProps) => (
            <Layout {...evaProps}>
                <Button onGetOtSchedule={()=>dispatch(actions.getOtSchedule(trainer.name))}>
                    {evaProps => <Text {...evaProps} style={[evaProps.style]}>OT예약</Text>}
                </Button>
            </Layout>
        );

        return (
            <Layout style={styles.card} key={trainer.id}>
                <Card header={cardHeader} footer={cardFooter}>
                    <View>
                        <Image style={{width: 30, height: 30}} />
                    </View>
                    <View>
                        <Text>
                            이름: {trainer.name}{"\n"}
                            수상경력: {trainer.awards}{"\n"}
                            수업소개: {trainer.intro}{"\n"}
                        </Text>
                    </View>
                </Card>
            </Layout>
        )
    })
      
    return (
        <ScrollView style={styles.container}>
            {html}
        </ScrollView>
    );
}