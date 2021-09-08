import React from "react";
import { View, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import items from "../config/items";

function CardsList({ navigation }) {
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => <AppCard item={item} navigation={navigation} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default CardsList;
