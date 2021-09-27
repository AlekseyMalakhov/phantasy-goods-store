import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
});

function WriteMessageScreen({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send message to {item.seller.name}</Text>
        </View>
    );
}

export default WriteMessageScreen;
