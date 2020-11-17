import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

export const OpenModal = ({onText, width, height}) => {

  const [visible, setVisible] = React.useState(true);
  const text = onText? onText : "기본 알림입니다.";
  const minWidth = width? width : 200;
  const minHeight = height? height : 100;


  const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    card: {
      minWidth: minWidth,
      minHeight: minHeight
    },
    elem: {
      margin: 10,
    },
  });

  return (
    <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true} style={styles.card}>
            <Text style={styles.elem}>{text}</Text>
            <Button
                style={styles.elem} 
                onPress={() => setVisible(false)}>
            닫기
            </Button>
        </Card>
    </Modal>
  );
};
