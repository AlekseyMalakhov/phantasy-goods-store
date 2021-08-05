import React from "react";
import { View, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import items from "../config/items";

function CardsList(props) {
    return <FlatList data={items} renderItem={({ item }) => <AppCard item={item} />} keyExtractor={(item) => item.id.toString()} />;
}

export default CardsList;
