import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import colors from "../config/colors";
import FormInput from "./forms/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyCart } from "../store/user";

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
    houseFlat: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required().label("Fullname"),
    city: Yup.string().required().label("City"),
    street: Yup.string().required().label("Street"),
    house: Yup.string().required().label("House"),
    flat: Yup.number().label("Flat").typeError("Flat must be a number"),
    email: Yup.string().required().email().label("Email"),
    phone: Yup.string().required().label("Phone"),
});

function DeliveryInfo({ navigation }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.user.cart);

    const handleSubmit = (values) => {
        values.items = cart;
        console.log(values);
        dispatch(emptyCart());
        navigation.navigate("OrderSentSuccessfully");
    };

    const reset = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "AppNavigator" }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title2}>Delivery info</Text>
            <Formik
                initialValues={{
                    fullname: "",
                    phone: "",
                    email: "",
                    city: "",
                    street: "",
                    house: "",
                    flat: "",
                    comment: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <React.Fragment>
                        <FormInput placeholder="Fullname" name="fullname" />
                        <FormInput placeholder="Phone" name="phone" keyboardType="phone-pad" />
                        <FormInput placeholder="Email" name="email" keyboardType="email-address" textContentType="emailAddress" />
                        <FormInput placeholder="City" name="city" />
                        <FormInput placeholder="Street" name="street" />
                        <View style={styles.houseFlat}>
                            <FormInput placeholder="House" name="house" containerStyle={{ flex: 1 }} />
                            <FormInput placeholder="Flat" name="flat" containerStyle={{ flex: 1 }} keyboardType="number-pad" />
                        </View>
                        <FormInput placeholder="Comment" name="comment" multiline numberOfLines={4} />
                        <View style={styles.buttons}>
                            <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={reset} />
                            <Button buttonStyle={[styles.button, styles.buy]} title="Send order" onPress={handleSubmit} />
                        </View>
                    </React.Fragment>
                )}
            </Formik>
        </View>
    );
}

export default DeliveryInfo;
