import React from "react";
import { Entypo } from "@expo/vector-icons";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { ExcerView } from "../components/excerGuide/ExcerGuide";

export default function ExcerGuideView({ navigation }) {
  const HomeAction = () => (
    <Entypo
      name="home"
      size={24}
      color="black"
      onPress={() => navigation.navigate("Home")}
    />
  );
  const GoHome = () => <TopNavigationAction icon={HomeAction} />;
  return (
    <>
      <TopNavigation alignment="center" title="Anygym" accessoryLeft={GoHome} />
      <ExcerView />
    </>
  );
}
