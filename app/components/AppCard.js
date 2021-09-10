import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import ShareButton from "./ShareButton";

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 0,
        paddingTop: 0,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        marginTop: 5,
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
    shareButtonContainer: {
        position: "absolute",
        right: 10,
    },
});

function AppCard({ item, navigation }) {
    return (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>
                <Text>{item.name}</Text>
            </Card.Title>
            <Card.Divider />
            <Card.Image source={item.images[0]} onPress={() => navigation.navigate("ItemScreen", { item })}></Card.Image>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ marginBottom: 10, marginTop: 10 }} numberOfLines={5}>
                    {item.description}
                </Text>
                <Text style={styles.seller}>{item.seller.name}</Text>
                <View style={styles.action}>
                    <Text style={styles.price}>{item.price + "$"}</Text>
                    <Button buttonStyle={styles.button} title="Buy" onPress={() => navigation.navigate("BuyScreen", { item })} />
                </View>
            </View>
            <View style={styles.shareButtonContainer}>
                <ShareButton />
            </View>
        </Card>
    );
}

export default AppCard;
