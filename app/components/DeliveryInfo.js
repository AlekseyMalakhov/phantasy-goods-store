import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";
import AppForm from "./forms/AppForm";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {},
    title2: {
        textAlign: "center",
        marginTop: 30,
        marginBottom: 15,
        fontSize: 18,
    },
    button: {
        borderRadius: 5,
        width: 100,
        marginHorizontal: 20,
    },
    buy: {
        backgroundColor: colors.primaryDarkColor,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    cancel: {
        backgroundColor: colors.secondaryLightColor,
        color: "black",
    },
});

function DeliveryInfo(props) {
    const handleSubmit = (e) => {
        console.log(e);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title2}>Delivery info</Text>
            <AppForm
                initialValues={{
                    fullname: "",
                    city: "",
                    street: "",
                    house: "",
                    flat: "",
                    comment: "",
                }}
                onSubmit={handleSubmit}
                //validationSchema={validationSchema}
            >
                <Input placeholder="Fullname" name="fullname" />
                <Input placeholder="City" name="city" />
                <Input placeholder="Street" name="street" />
                <Input placeholder="House" name="house" />
                <Input placeholder="Flat" name="flat" />
                <Input placeholder="Comment" name="comment" />
                <View style={styles.buttons}>
                    <Button buttonStyle={styles.button} title="Cancel" type="outline" />
                    <Button buttonStyle={[styles.button, styles.buy]} title="Buy" />
                </View>
            </AppForm>
        </View>
    );
}

export default DeliveryInfo;
