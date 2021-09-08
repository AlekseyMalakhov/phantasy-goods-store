import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FormInput from "../components/forms/FormInput";
import { Icon, ThemeProvider, Image, Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#212629",
    },
    title: {
        marginVertical: 15,
        fontSize: 20,
        color: "white",
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 50,
    },
    buttons: {
        width: "100%",
        paddingHorizontal: 15,
    },
    button: {
        borderRadius: 5,
    },
    buy: {
        backgroundColor: colors.primaryDarkColor,
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
                        <ThemeProvider
                            theme={{
                                Input: {
                                    containerStyle: {},
                                    inputContainerStyle: {
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        backgroundColor: "white",
                                        height: 50,
                                        marginVertical: 10,
                                    },
                                    placeholderTextColor: colors.textLight,
                                    inputStyle: {
                                        marginLeft: 10,
                                        color: "black",
                                    },
                                },
                            }}
                        >
                            <Text style={styles.title}>Sign in</Text>
                            <FormInput
                                placeholder="Email"
                                name="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                autoCapitalize="none"
                                autoCorrect={false}
                                leftIcon={
                                    <Icon
                                        name="email-outline"
                                        type="material-community"
                                        style={{ marginLeft: 10 }}
                                        color={colors.textLight}
                                        size={25}
                                    />
                                }
                            />
                            <FormInput
                                placeholder="Password"
                                name="password"
                                keyboardType="default"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                autoCorrect={false}
                                leftIcon={<Icon name="lock" type="simple-line-icon" style={{ marginLeft: 10 }} color={colors.textLight} size={25} />}
                            />
                        </ThemeProvider>

                        <View style={styles.buttons}>
                            <Button
                                containerStyle={{ marginTop: 10, marginBottom: 25 }}
                                buttonStyle={[styles.button, styles.buy]}
                                title="Login"
                                onPress={handleSubmit}
                            />
                            <Button buttonStyle={styles.button} title="Register" type="outline" />
                        </View>
                    </React.Fragment>
                )}
            </Formik>
        </View>
    );
}

export default LoginScreen;
