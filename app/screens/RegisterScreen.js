import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import FormInput from "../components/forms/FormInput";
import { Icon, ThemeProvider, Image, Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import authAPI from "../api/auth";
import ImageSingleInput from "../components/forms/ImageSingleInput";

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
    error: {
        color: "red",
    },
    img: {
        margin: 5,
        overflow: "hidden",
    },
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});

function RegisterScreen({ navigation }) {
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const handleSubmit = (data) => {
        console.log(data);
        if (data.password !== data.repeatPassword) {
            setErrorPassword(true);
            return;
        }
        const textData = { ...data };
        delete textData.image;
        delete textData.repeatPassword;

        const JSONObj = JSON.stringify(textData);
        const newAccount = {
            text: JSONObj,
            img: data.image,
        };
        console.log(newAccount);

        /*
        img: File
            lastModified: 1630668050702
            lastModifiedDate: Fri Sep 03 2021 14:20:50 GMT+0300 (Moscow Standard Time) {}
            name: "good-designed-order-confirmation-email-with-a-gif.gif"
            size: 87957
            type: "image/gif"
            uid: 1632399347867
            webkitRelativePath: ""
            [[Prototype]]: File
            text: "{\"name\":\"test124\",\"password\":\"123\"}"
            [[Prototype]]: Object
        */

        const formData = new FormData();
        for (let x in newAccount) {
            formData.append(x, newAccount[x]);
        }

        authAPI
            .createAccount(formData)
            .then((status) => {
                if (status === 201) {
                    setErrorEmail(false);
                    navigation.navigate("AccountSuccessfullyCreated");
                }
                if (status === 409) {
                    setErrorEmail(true);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    image: "",
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
                                        marginVertical: 8,
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
                            <ImageSingleInput name="image" style={styles.img} raw />
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

                        {errorEmail ? <Text style={styles.error}>Current email already exists</Text> : null}
                        {errorPassword ? <Text style={styles.error}>Passwords don't match each other</Text> : null}
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
