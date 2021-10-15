import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardsList from "./CardsList";

const styles = StyleSheet.create({
    container: {},
    title: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 20,
    },
});

function MySellingItems(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My selling items</Text>
            <CardsList userItems />
        </View>
    );
}

export default MySellingItems;
