import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
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
    const [number, setNumber] = useState(null);

    useEffect(() => {
        if (cart.length > 0) {
            let number = 0;
            cart.forEach((item) => {
                number = number + item.number;
            });
            setNumber(number);
        }
    }, [cart]);
    return (
        <TouchableOpacity onPress={() => navigation.navigate("BuyScreen")}>
            <View style={styles.container}>
                <Icon color="#fff" type="material-community" name="cart-outline" />
                {cart.length > 0 ? (
                    <View style={styles.dot}>
                        <Text style={styles.number}>{number}</Text>
                    </View>
                ) : null}
            </View>
        </TouchableOpacity>
    );
}

export default CartHeaderButton;
