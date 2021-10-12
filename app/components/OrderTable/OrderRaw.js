import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Image } from "react-native-elements";
import colors from "../../config/colors";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../store/user";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    cell: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flex2: {
        flex: 2,
    },
});

function OrderRaw({ item }) {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const askToDelete = () => {
        Alert.alert("Delete", `Are you sure you want to delete ${item.name}?`, [
            { text: "Yes", onPress: () => dispatch(removeItemFromCart(item)) },
            { text: "No" },
        ]);
    };
    return (
        <TouchableOpacity style={styles.container} onLongPress={askToDelete}>
            <View style={[styles.cell, styles.flex2]}>
                <Image
                    source={{ uri: item.images[0] }}
                    style={{ width: 80, height: 80 }}
                    onPress={() => navigation.navigate("ItemScreen", { item })}
                />
            </View>
            <View style={[styles.cell, styles.flex2]}>
                <Text>{item.name}</Text>
                <Text style={{ color: colors.textLight, marginTop: 15 }}>{item.seller.name}</Text>
            </View>
            <View style={styles.cell}>
                <Text>{item.number}</Text>
            </View>
            <View style={styles.cell}>
                <Text>{item.price + "$"}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default OrderRaw;
