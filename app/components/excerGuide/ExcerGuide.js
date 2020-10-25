import React from "react";
import { List, Text, Card, Button } from "@ui-kitten/components";
import { View, Image, StyleSheet } from "react-native";

const data = new Array(8).fill({
  title: "등근육 운동 루틴",
});

export const ExcerGuide = () => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps) => (
    <Text {...footerProps}>By 근육맨</Text>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}
    >
      <Text>
        연예인처럼 멋진 등근육은 어디에서 오는 것일까요? 꾸준한 노력으로 만드는
        뒷모습
      </Text>
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
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
