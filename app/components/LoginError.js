import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
    },
});

function LoginError({ text }) {
    if (text === "") return null;
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16, color: "red" }}>{text}</Text>
        </View>
    );
}

export default LoginError;
