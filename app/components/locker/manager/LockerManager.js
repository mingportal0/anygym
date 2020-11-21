import React, {useState} from "react";
import { List, Text, Card, Button } from "@ui-kitten/components";
import { View, Image, StyleSheet, TextInput  } from "react-native";


export const LockerManager = () => {
    return (
      <View style={styles.viewContainer}>
          <Locker/>
      </View>
    );
};

export const Locker = () => {
  const [btmNum, setBtnNum] = useState(1);
  const [selectedBtnIdx, setBtnIdx] = useState(null);
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [saveCount, saveSaveCount] = useState(0);


  const modCount = (param) => {
      if(param == 'cancel'){
        setFlag(false);
        setCount(saveCount);
      }else if(param == 'confirm') {
        setFlag(false);
      }else {
        setFlag(true);
        saveSaveCount(count);
        setBtnIdx(null);
      }
  };

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if(count == 0) return;
    setCount(count - 1);
  };

  const selectLocker = (locker,index) => {
    if(flag == false){
      if(selectedBtnIdx == index){
        setBtnIdx(null);
      }else {
        setBtnIdx(index);
        alert(locker);
      }
    }
  }

  const onChangeText = (text) => {
    if(text < 0 || isNaN(text)) return;
    setCount(Number(text));
  };

  
  const locker = [];
  for(var i=1; i<=count; i++){
      locker.push(i);
  };
  const lockerList = locker.map((locker,index) => 
                        <Button style={selectedBtnIdx == index ? styles.selectedBtnStyle : styles.btnStyle}
                                onPress={() => selectLocker(locker,index)}>{locker}</Button> 
                     );


  return (
    <View style={styles.viewContainer}>
        {
          flag == true 
          ? <View style={styles.container}>
              <TextInput
                style={styles.inputText}
                autoFocus={true}
                keyboardType="number-pad"
                onChangeText={text => onChangeText(text)}
                value={count}
              />
              <Text style={styles.text} category='h3'>개</Text> &nbsp;&nbsp;&nbsp;

              <Button onPress={increase}>+</Button>&nbsp;
              <Button onPress={decrease}>-</Button>&nbsp;
              <Button onPress={() => modCount('cancel')}>취소</Button>&nbsp;
              <Button onPress={() => modCount('confirm')}>확인</Button>&nbsp;
            </View>

          : <View style={styles.container}>
              <Text style={styles.text} category='h3'>총 {count}개</Text> &nbsp;&nbsp;&nbsp;
              <Button onPress={() => modCount('mod')}>수정</Button>
            </View>
        }

        <View style={styles.container}>
          {lockerList}
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  btnStyle:{
    marginRight: 10,
    backgroundColor: 'grey',
    borderColor: 'grey'
  },
  selectedBtnStyle:{
    marginRight: 10,
    backgroundColor: 'red',
    borderColor: 'red'
  },
  text: {
    margin: 2,
  },
  inputText: {
    height: 40, 
    width: 80, 
    borderColor: 'black', 
    borderWidth: 2,
    textAlign: 'center'
  },
});
