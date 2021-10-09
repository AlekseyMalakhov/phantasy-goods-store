import React from "react";
import { View, FlatList } from "react-native";
import AppCard from "../components/AppCard";
import { useSelector } from "react-redux";

function CardsList({ navigation }) {
    const items = useSelector((state) => state.items.items);

    return (
        <FlatList
            data={items.length > 0 ? items : []}
            renderItem={({ item }) => <AppCard item={item} navigation={navigation} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default CardsList;
