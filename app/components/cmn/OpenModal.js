import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

export const OpenModal = ({text, onText, width, height}) => {
  const minWidth = width? width : 200;
  const minHeight = height? height : 100;

  const onClose = () => {
    onText("");
  }
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
        visible={text.length>0}
        backdropStyle={styles.backdrop}
        onBackdropPress={onClose}>
        <Card disabled={true} style={styles.card}>
            <Text style={styles.elem}>{text}</Text>
            <Button
                style={styles.elem} 
                onPress={onClose}>
            닫기
            </Button>
        </Card>
    </Modal>
  );
};
