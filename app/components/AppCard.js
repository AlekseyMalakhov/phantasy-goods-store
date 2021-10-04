import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import ShareButton from "./ShareButton";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/user";

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 0,
        paddingTop: 0,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 0,
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
        top: 10,
    },
    type: {
        textAlign: "center",
        color: colors.textLight,
        marginBottom: 5,
    },
});

function AppCard({ item, navigation }) {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(item));
    };

    return (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>
                <Text>{item.name}</Text>
            </Card.Title>
            <Text style={styles.type}>{item.type}</Text>
            <Card.Divider />
            <Card.Image source={item.images[0].uri} onPress={() => navigation.navigate("ItemScreen", { item })}></Card.Image>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ marginBottom: 10, marginTop: 10 }} numberOfLines={5}>
                    {item.description}
                </Text>
                <Text style={styles.seller} onPress={() => navigation.navigate("WriteMessageScreen", { item })}>
                    {item.seller.name}
                </Text>
                <View style={styles.action}>
                    <Text style={styles.price}>{item.price + "$"}</Text>
                    <Button buttonStyle={styles.button} title="Buy" onPress={addToCart} />
                </View>
            </View>
            <View style={styles.shareButtonContainer}>
                <ShareButton />
            </View>
        </Card>
    );
}

export default AppCard;
