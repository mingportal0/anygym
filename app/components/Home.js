import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { withNavigation } from "react-navigation";

function Home() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">테스트 홈</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </Layout>
  );
}

export default Home;
