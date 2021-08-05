import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        backgroundColor: "blue",
        alignItems: "center",
    },
    title: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
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
        marginBottom: 50,
    },
    price: {
        fontSize: 20,
        marginLeft: 10,
    },
    seller: {
        marginTop: 10,
        color: colors.textLight,
    },
});

function ItemScreen({ item }) {
    return (
        <React.Fragment>
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
                <Text style={styles.title}>{item.name}</Text>
                <Image source={item.img}></Image>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>{item.description}</Text>
                    <Text style={styles.seller}>{item.seller.name}</Text>
                    <View style={styles.action}>
                        <Text style={styles.price}>{item.price + "$"}</Text>
                        <Button buttonStyle={styles.button} title="Buy" />
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}

export default ItemScreen;
