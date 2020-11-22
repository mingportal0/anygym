import React from "react";
import { List, Text, Card, Layout, useTheme } from "@ui-kitten/components";
import { View, Image, StyleSheet, Video } from "react-native";
import "react-native-gesture-handler";
import { WebView } from "react-native-webview";

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

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme["color-primary-default"] },
      ]}
    >
      <Text category="h4" status="control">
        영상제목
      </Text>

      <WebView
        style={styles.WebViewContainer}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // mixedContentMode="compatibility"
        source={{
          uri: `https://www.youtube.com/watch?v=JGL-eQAAxGs`,
        }}
        useWebKit={true}
      />
      <Text status="control">등록일:2020-11-15</Text>
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
    alignItems: "flex-end",
    fontSize: 20,
  },
  item: {
    marginVertical: 4,
  },
  WebViewContainer: {
    marginTop: Platform.OS == "ios" ? 20 : 0,
  },
});
