import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardsList from "./CardsList";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 18,
    },
});

function MySellingItems(props) {
    const user = useSelector((state) => state.user.user);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My selling items</Text>
            {user ? <CardsList itemsForUser={user.id} /> : null}
        </View>
    );
}

export default MySellingItems;
