import React from "react";
import { View, StyleSheet } from "react-native";
import OrderRaw from "./OrderRaw";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableTotal from "./OrderTableTotal";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
    },
});

function OrderTable({ items }) {
    return (
        <View style={styles.container}>
            <OrderTableHeader />
            {items.map((item) => (
                <OrderRaw item={item} key={item.id} />
            ))}
            <OrderTableTotal />
        </View>
    );
}

export default OrderTable;
