import React, { useEffect, useState } from "react";
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
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        if (items) {
            for (let i = 0; i < items.length; i++) {
                total = total + items[i].price * items[i].number;
            }
        }
        setTotal(total);
    }, [items]);

    return (
        <View style={styles.container}>
            <OrderTableHeader />
            {items ? items.map((item) => <OrderRaw item={item} key={item.id} />) : null}
            <OrderTableTotal total={total} />
        </View>
    );
}

export default OrderTable;
