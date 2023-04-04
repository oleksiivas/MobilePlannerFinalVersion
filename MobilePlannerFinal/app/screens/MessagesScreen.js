import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Alex Vasiuk",
    description: "Psalm 34:4 \n I sought the Lord, and he heard me, and delivered me from all my fears.",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Alex Vasiuk",
    description:
      "Romans 15:13 \n  Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.",
    image: require("../assets/me.jpg"),
  },
  {
    id: 3,
    title: "Alex Vasiuk",
    description:
      "Philippians 4:6 \n  Be careful for nothing; but in everything by prayer and supplication with thanksgiving let your requests be made known unto God.",
    image: require("../assets/me.jpg"),
  },
  {
    id: 4,
    title: "Alex Vasiuk",
    description:
      "Joshua 1:9 \n  Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the lord thy God is with thee whithersoever thou goest.",
    image: require("../assets/me.jpg"),
  },
  {
    id: 5,
    title: "Alex Vasiuk",
    description:
      "Proverbs 3:5-6 \n  Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    image: require("../assets/me.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
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
          setMessages([
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

const styles = StyleSheet.create({});

export default MessagesScreen;
