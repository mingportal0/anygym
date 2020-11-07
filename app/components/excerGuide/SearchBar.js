import React from "react";
import { StyleSheet } from "react-native";
import {
  Input,
  Text,
  Layout,
  Button,
  SelectItem,
  Select,
  IndexPath,
} from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";

const data = ["어깨운동", "복근운동", "하체운동"];

export const SearchBar = () => {
  const [keyword, setText] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => {
    <SelectItem title={title} />;
  };
  return (
    <Layout style={styles.container} level="1">
      <Text style={{ paddingLeft: 20, paddingTop: 20 }}>부위 별 운동</Text>
      <Select
        style={styles.select}
        placeholder="전체"
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {data.map(renderOption)}
      </Select>
      <Button style={styles.button} size="small">
        <FontAwesome name="search" size={18} color="black" />
      </Button>
      <Button style={styles.QRbutton} size="small">
        QR스캔
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxHeight: 100,
  },
  select: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
  },
  button: {
    marginRight: 2,
    marginBottom: 15,
    marginTop: 10,
  },
  QRbutton: {
    marginBottom: 15,
    marginTop: 10,
    marginRight: 10,
  },
});
