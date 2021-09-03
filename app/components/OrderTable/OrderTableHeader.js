import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.primaryLightColor,
        height: 30,
    },
    cell: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        color: "white",
    },
    flex2: {
        flex: 2,
    },
});

function OrderTableHeader(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.cell, styles.flex2]}>
                <Text>Item</Text>
            </View>
            <View style={[styles.cell, styles.flex2]}>
                <Text>Name</Text>
            </View>
            <View style={styles.cell}>
                <Text>Quantity</Text>
            </View>
            <View style={styles.cell}>
                <Text>Price</Text>
            </View>
        </View>
    );
}

export default OrderTableHeader;
