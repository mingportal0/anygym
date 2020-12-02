import React, { useState, useCallback } from "react";
import { List, Text, Card, useTheme } from "@ui-kitten/components";
import { View, Image, StyleSheet, Toggle, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { Textarea } from "native-base";

const data = new Array(8).fill({
  title: "운동영상",
});

export const TdayExcer = () => {
  return (
    <Card>
      <Text>오늘의 추천영상 들어갈 자리</Text>
      <Image
        style={styles.thumnail}
        source={{
          url: "https://ppss.kr/wp-content/uploads/2017/02/2-30.jpg",
        }}
      />
    </Card>
  );
};

export const ExcerGuide = () => {
  // const navigation = this.context;
  const renderItem = ({ navigation }) => (
    <Card
      style={styles.item}
      status="basic"
      onPress={() => navigation.navigate("Home")}
    >
      <Image
        style={styles.thumnail}
        source={{
          url:
            "https://imgnews.pstatic.net/image/468/2020/09/10/0000696282_001_20200910082939703.jpg?type=w647",
        }}
      />
      <Text style={{ marginTop: 5, marginLeft: 2 }}>
        제목 : 운동영상 제목입니다
      </Text>
      <Text style={{ marginLeft: 2 }}>내용입니다</Text>
    </Card>
  );

  return (
    // <NavigationContext>
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
      onPress={() => navigation.navigate("Home")}
    />
    // </NavigationContext>
  );
};

export const ExcerView = () => {
  const theme = useTheme();

  const [playing, setPlaying] = useState(false);
  // const[checked, setChecked] = useState(false);

  const onStageChange = useCallback((state) => {
    if (state == "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing");
    }
  }, []);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <View>
      <Text style={[styles.titleText]}>
        영상제목{" "}
        <FontAwesome5
          name="star"
          size={24}
          color="black"
          style={styles.FontAwesome5}
        />
      </Text>
      <YoutubePlayer
        height={230}
        play={playing}
        videoId={"4sswp02n0Yg"}
        onChangeState={onStageChange}
      />
      <Textarea>운동영상 내용입니다</Textarea>
      <Text
        category="label"
        style={[
          styles.textarea,
          { backgroundColor: theme["color-primary-default"] },
        ]}
      >
        영상태그 : #해시 #태그 #내용 #넣을_자리
      </Text>
      {/* <Toggle checked={checked} onChange={onCheckedChange}>
        {`Checked : ${checked}`}
      </Toggle> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
    height: 300,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  thumnail: {
    flex: 1,
    width: 300,
    height: 150,
  },
  titleText: {
    fontSize: 35,
    color: "#000000",
    marginBottom: 20,
    textAlign: "left",
    backgroundColor: "white",
  },
  textarea: {
    fontSize: 20,
  },
  item: {
    marginVertical: 4,
  },
  FontAwesome5: {
    alignContent: "flex-end",
  },
});
