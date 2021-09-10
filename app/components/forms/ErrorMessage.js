import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
});

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;
    return <Text style={styles.error}>{error}</Text>;
}

export default ErrorMessage;
