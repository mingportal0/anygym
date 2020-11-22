import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  TopNavigation,
  TopNavigationAction,
  Tab,
  TabBar,
} from "@ui-kitten/components";

import { SearchBar } from "../components/excerGuide/SearchBar";
import { ExcerGuide } from "../components/excerGuide/ExcerGuide";
import { TdayExcer } from "../components/excerGuide/ExcerGuide";

export default function ExcerGuideList({ navigation }) {
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
      <SearchBar />
      <TdayExcer />
      <ExcerGuide />
    </>
  );
}
