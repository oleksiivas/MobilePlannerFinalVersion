import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Gym Plan",
    dates: "03/27/2023 - 04/16/2023",
    image: require("../assets/gym.jpg"),
  },
  {
    id: 2,
    title: "Studying 3W Plan",
    dates: "04/17/2023 - 05/07/2023",
    image: require("../assets/study.jpg"),
  },
  {
    id: 3,
    title: "Meal Prep 3W Plan",
    dates: "03/27/2023 - 04/16/2023",
    image: require("../assets/meal.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.dates}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
