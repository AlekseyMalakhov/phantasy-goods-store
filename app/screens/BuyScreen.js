import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import DeliveryInfo from "../components/DeliveryInfo";
import OrderTable from "../components/OrderTable/OrderTable";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        //display: "flex",
        //alignItems: "center",
    },
    title: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 20,
    },
});

function BuyScreen({ items }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Order conformation</Text>
                <OrderTable items={items} />
                <DeliveryInfo />
                <Text style={styles.title}>Cancel - Buy</Text>
            </ScrollView>
        </View>
    );
}

export default BuyScreen;