import React from "react";
import { StyleSheet } from "react-native";
import { Input, Layout } from "@ui-kitten/components";

export const SearchBar = () => {
  const [value, setValue] = React.useState("");

  return (
    <Layout style={styles.container} level="1">
      <Input
        style={styles.input}
        value={value}
        placeholder="영상 키워드를 입력하세요"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxHeight: 100,
  },
  input: {
    flex: 1,
    margin: 10,
  },
});
