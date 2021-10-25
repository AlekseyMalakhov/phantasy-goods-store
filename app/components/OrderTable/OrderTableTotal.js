import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
    title: {
        flex: 5,
        justifyContent: "center",
        marginLeft: 20,
    },
    cell: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

function OrderTableTotal({ total }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontWeight: "bold" }}>Total</Text>
            </View>
            <View style={styles.cell}>
                <Text style={{ fontWeight: "bold" }}>{total}$</Text>
            </View>
        </View>
    );
}

export default OrderTableTotal;
