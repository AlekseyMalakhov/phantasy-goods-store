import React from "react";
import { View, FlatList } from "react-native";
import AppCard from "../components/AppCard";

function CardsList(props) {
    return <FlatList data={[1, 2, 3, 4]} renderItem={() => <AppCard />} keyExtractor={(item) => item.toString()} />;
}

export default CardsList;
