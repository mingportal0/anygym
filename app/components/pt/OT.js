import React from 'react';
import { View, Text } from 'react-native';

export default function OT ({ route }) {
    const trainerId = route.params.trainerId;
    return (
        <View>
            <Text>트레이너 {trainerId}의 OT 스케줄입니다.</Text>
        </View>
    )
}