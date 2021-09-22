import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import DeliveryInfo from "../components/DeliveryInfo";
import OrderTable from "../components/OrderTable/OrderTable";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        display: "flex",
        flex: 1,
        //alignItems: "center",
    },
    title: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 20,
    },
});

function BuyScreen() {
    const cart = useSelector((state) => state.user.cart);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Order conformation</Text>
                <OrderTable items={cart} />
                <DeliveryInfo />
            </ScrollView>
        </View>
    );
}

export default BuyScreen;
