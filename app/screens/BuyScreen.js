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

function BuyScreen({ navigation }) {
    const cart = useSelector((state) => state.user.cart);
    return (
        <View style={styles.container}>
            {cart.length > 0 ? (
                <ScrollView>
                    <Text style={styles.title}>Order conformation</Text>
                    <OrderTable items={cart} />
                    <Text style={{ marginTop: 10, marginLeft: 10 }}>Long press on item to remove it from the list</Text>
                    <DeliveryInfo navigation={navigation} />
                </ScrollView>
            ) : (
                <Text style={styles.title}>Cart is empty</Text>
            )}
        </View>
    );
}

export default BuyScreen;
