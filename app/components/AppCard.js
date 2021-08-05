import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 0,
        paddingTop: 5,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        backgroundColor: "blue",
    },
    button: {
        marginRight: 10,
        borderRadius: 5,
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
    share: {
        color: colors.textLight,
        position: "absolute",
        fontSize: 25,
        top: 10,
        right: 50,
    },
});

function AppCard({ item }) {
    return (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>
                <View style={{ backgroundColor: "green", flex: 1 }}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Icon name="share" style={styles.share}></Icon>
                </View>
            </Card.Title>
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
