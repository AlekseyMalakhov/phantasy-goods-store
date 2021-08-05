import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import colors from "../config/colors";

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 0,
        paddingTop: 5,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    button: {
        marginRight: 10,
        borderRadius: 0,
        paddingHorizontal: 30,
        backgroundColor: colors.primaryDarkColor,
    },
    action: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        fontSize: 20,
        marginLeft: 10,
    },
    seller: {
        color: colors.textLight,
    },
});

function AppCard({ item }) {
    return (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>{item.name}</Card.Title>
            <Card.Divider />
            <Card.Image source={item.img}></Card.Image>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ marginBottom: 10, marginTop: 10 }} numberOfLines={5}>
                    {item.description}
                </Text>
                <Text style={styles.seller}>{item.seller.name}</Text>
                <View style={styles.action}>
                    <Text style={styles.price}>{item.price + "$"}</Text>
                    <Button buttonStyle={styles.button} title="Buy" />
                </View>
            </View>
        </Card>
    );
}

export default AppCard;
