import React from "react";
import { List, Text, Card } from "@ui-kitten/components";
import { View, Image, StyleSheet } from "react-native";

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
  const renderItem = (info) => (
    <Card style={styles.item} status="basic">
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
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
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
    alignItems: "flex-end",
    fontSize: 20,
  },
  item: {
    marginVertical: 4,
  },
});
