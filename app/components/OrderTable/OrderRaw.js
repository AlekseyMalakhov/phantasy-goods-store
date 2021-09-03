import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";
import colors from "../../config/colors";

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
    return (
        <View style={styles.container}>
            <View style={[styles.cell, styles.flex2]}>
                <Image source={item.img} style={{ width: 80, height: 80 }} />
            </View>
            <View style={[styles.cell, styles.flex2]}>
                <Text>{item.name}</Text>
            </View>
            <View style={styles.cell}>
                <Text>1</Text>
            </View>
            <View style={styles.cell}>
                <Text>{item.price + "$"}</Text>
            </View>
        </View>
    );
}

export default OrderRaw;
