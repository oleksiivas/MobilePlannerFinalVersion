import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialHabits = [
  {
    id: 1,
    title: "Alex Vasiuk",
    description: "Empty Habit #1",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Alex Vasiuk",
    description:
      "Empty Habit #2",
    image: require("../assets/me.jpg"),
  },
];

function HabitsScreen(props) {
  const [habits, setHabits] = useState(initialHabits);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (habit) => {
    // Delete the message from messages
    setHabits(habits.filter((m) => m.id !== habit.id));
  };

  return (
    <Screen>
      <FlatList
        data={habits}
        keyExtractor={(habit) => habit.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setHabits([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/me.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}


export default HabitsScreen;
