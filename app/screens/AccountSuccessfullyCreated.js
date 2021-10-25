import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
    },
    button: {
        marginTop: 30,
        borderRadius: 5,
        paddingHorizontal: 30,
        backgroundColor: colors.primaryDarkColor,
    },
});

function AccountSuccessfullyCreated({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Account successfully created!</Text>
            <Button buttonStyle={styles.button} title="Go to Login Screen" onPress={() => navigation.navigate("LoginScreen")} />
        </View>
    );
}

export default AccountSuccessfullyCreated;
