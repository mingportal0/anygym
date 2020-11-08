import React from "react";
import { Layout, Text, Card, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 
import { lightBlue } from "@material-ui/core/colors";

const data =  [
  {
    no: 1,
    cate: '공지사항',
    message: '샤워실공사로 인한..',
    useable:'Y'
  },
  {
    no: 2,
    cate: '공지사항',
    message: '이벤트 안내',
    useable:'Y'
  },
  {
    no: 3,
    cate: '회원',
    message: 'pt시간 10분전',
    useable:'Y'
  },
  {
    no: 4,
    cate: 'pt관리',
    message: '수업시작10분전',
    useable:'Y'
  },
  {
    no: 5,
    cate: '회원',
    message: '회원권 만료 10일전',
    useable:'Y'
  }
]

export default function PushList({ navigation }) {
  const DrawerMenuIcon = () => (
    <Entypo name="home" size={24} color="black" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );
  
  const renderDrawerMenu = () => (
    <TopNavigationAction icon={DrawerMenuIcon} />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );
  return (
    <>
      <TopNavigation
        alignment='center'
        title='Anygym'
        accessoryLeft={renderDrawerMenu}
      />
      <SafeAreaView style={styles.container}>
        <Layout style={styles.menu}>
          <Entypo name="dot-single" size={24} color="black" />
          <Text category="h6">Push관리 &gt; PushList</Text>
        </Layout>
          <View style={styles.contents}>
            <View style={styles.tableheader}>
              <Text>no</Text>
              <Text>대상</Text>
              <Text>메시지</Text>
              <Text>사용여부</Text>
            </View>
              {
                data.map((item, index) => (
                  <Card style={styles.cardcolor}>
                    <View style={styles.item}>
                      <Text>{item.no}</Text>
                      <Text>{item.cate}</Text>
                      <Text>{item.message}</Text>
                      <Text>{item.useable}</Text>
                    </View>
                  </Card>
                ))
              }
          </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  menu:{
    flexDirection:'row', 
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    height: 40,
  },
  contents:{
    flex:1
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 10
  },
  cardcolor:{
    backgroundColor: 'powderblue'
  },
  tableheader:{
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 30
  }

});






