import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FormInput from "../components/forms/FormInput";
import { Icon, ThemeProvider, Image, Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import authAPI from "../api/auth";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    title: {
        marginVertical: 15,
        fontSize: 20,
        //color: "white",
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
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});

function RegisterScreen({ navigation }) {
    const handleSubmit = (data) => {
        authAPI.createAccount(data).then((resp) => console.log(resp));
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
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
                            <Text style={styles.title}>Create account</Text>
                            <FormInput
                                placeholder="Name"
                                name="name"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                leftIcon={<Icon name="user" type="simple-line-icon" style={{ marginLeft: 10 }} color={colors.textLight} size={25} />}
                            />
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
                            <FormInput
                                placeholder="Repeat password"
                                name="repeatPassword"
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
                                title="Create account"
                                onPress={handleSubmit}
                            />
                            <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={() => navigation.navigate("LoginScreen")} />
                        </View>
                    </React.Fragment>
                )}
            </Formik>
        </View>
    );
}

export default RegisterScreen;
