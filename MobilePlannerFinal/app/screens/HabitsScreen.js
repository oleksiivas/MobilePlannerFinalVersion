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
    description: "Habit #1: Get Up at 7:30 AM",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Alex Vasiuk",
    description:
      "Habit #2: Workout in the morning 3 times a week",
    image: require("../assets/me.jpg"),
  },
  {
    id: 3,
    title: "Alex Vasiuk",
    description: "Habit #3: Drink water during the day",
    image: require("../assets/me.jpg"),
  },
  {
    id: 4,
    title: "Alex Vasiuk",
    description: "Habit #4: Eat out no more than once a week",
    image: require("../assets/me.jpg"),
  },
  {
    id: 5,
    title: "Alex Vasiuk",
    description: "Habit #5: Make Daily Plans for everyday",
    image: require("../assets/me.jpg"),
  },
  {
    id: 6,
    title: "Alex Vasiuk",
    description: "Habit #6: Read books before going to bed",
    image: require("../assets/me.jpg"),
  },
  {
    id: 7,
    title: "Alex Vasiuk",
    description: "Habit #7: Check email box every day",
    image: require("../assets/me.jpg"),
  },
  {
    id: 8,
    title: "Alex Vasiuk",
    description: "Habit #8: Go to bed at 11:30 every day",
    image: require("../assets/me.jpg"),
  },
  {
    id: 9,
    title: "Alex Vasiuk",
    description: "Habit #9: Walk outside a few times a week",
    image: require("../assets/me.jpg"),
  },
  {
    id: 10,
    title: "Alex Vasiuk",
    description: "Habit #10: Have positive attitude",
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
