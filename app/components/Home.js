import React from "react";
import { Layout, Text, Button, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

function Home({ navigation }) {
  const DrawerMenuIcon = () => (
    <Ionicons name="md-menu" size={24} color="black" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );
  
  const renderDrawerMenu = () => (
    <TopNavigationAction icon={DrawerMenuIcon} />
  );

  return (
    <>
      <TopNavigation
        alignment='center'
        title='Anygym'
        accessoryLeft={renderDrawerMenu}
      />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text category="h1">테스트 홈</Text>
      </Layout>
    </>
  );
}

export default Home;
