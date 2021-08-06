import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

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
    share: {
        color: colors.textLight,
    },
    shareButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 10,
        width: 45,
        height: 37,
    },
});

function AppCard({ item }) {
    return (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>
                <Text>{item.name}</Text>
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
            <View style={styles.shareButtonContainer}>
                <Button
                    buttonStyle={styles.share}
                    icon={<Icon name="share" size={25} color={colors.textLight}></Icon>}
                    type="clear"
                    containerStyle={{ borderRadius: 22 }}
                    onPress={() => console.log("share")}
                />
            </View>
        </Card>
    );
}

export default AppCard;
