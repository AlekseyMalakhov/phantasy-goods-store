import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import FormInput from "../components/forms/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#212629",
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 100,
    },
});

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});

function LoginScreen(props) {
    const handleSubmit = (e) => {
        console.log(e);
    };
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <React.Fragment>
                        <FormInput placeholder="Email" name="email" keyboardType="email-address" textContentType="emailAddress" />
                        <FormInput placeholder="Password" name="password" />

                        <View style={styles.buttons}>
                            <Button buttonStyle={styles.button} title="Cancel" type="outline" />
                            <Button buttonStyle={[styles.button, styles.buy]} title="Send order" onPress={handleSubmit} />
                        </View>
                    </React.Fragment>
                )}
            </Formik>
        </View>
    );
}

export default LoginScreen;
