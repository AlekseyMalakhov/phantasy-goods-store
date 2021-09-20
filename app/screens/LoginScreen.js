import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import FormInput from "../components/forms/FormInput";
import { Icon, ThemeProvider, Image, Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import authAPI from "../api/auth";
import LoginError from "../components/LoginError";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    title: {
        marginVertical: 15,
        fontSize: 20,
        color: "white",
    },
    logo: {
        width: 200,
        height: 200,
    },
    buttons: {
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 20,
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

function LoginScreen({ navigation }) {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        authAPI.login(e).then((resp) => {
            if (resp !== 200) {
                if (resp === 401) {
                    setError("Login or password is incorrect");
                } else {
                    setError("Some error occurred. Please try later");
                }
            }
        });
    };

    return (
        <ImageBackground style={styles.background} source={require("../assets/main_screen.jpg")} blurRadius={2}>
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
                                        height: 43,
                                    },
                                    placeholderTextColor: colors.textLight,
                                    inputStyle: {
                                        marginLeft: 10,
                                        color: "black",
                                    },
                                },
                            }}
                        >
                            <LoginError text={error} />
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
                            <Button
                                buttonStyle={styles.button}
                                title="Register"
                                type="outline"
                                onPress={() => navigation.navigate("RegisterScreen")}
                            />
                        </View>
                    </React.Fragment>
                )}
            </Formik>
        </ImageBackground>
    );
}

export default LoginScreen;
