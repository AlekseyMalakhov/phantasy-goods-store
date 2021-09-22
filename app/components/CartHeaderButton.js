import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {},
    dot: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.secondaryColor,
        height: 14,
        width: 14,
        borderRadius: 7,
    },
    number: {
        fontSize: 10,
        fontWeight: "bold",
    },
});

function CartHeaderButton(props) {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.user.cart);
    return (
        <View style={styles.container}>
            <Icon color="#fff" type="material-community" name="cart-outline" onPress={() => navigation.navigate("BuyScreen")} />
            {cart.length > 0 ? (
                <View style={styles.dot}>
                    <Text style={styles.number}>{cart.length}</Text>
                </View>
            ) : null}
        </View>
    );
}

export default CartHeaderButton;
