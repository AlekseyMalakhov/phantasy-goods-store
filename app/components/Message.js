import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {},
});

function Message({ message }) {
    return (
        <View style={styles.container}>
            <Text>{message.text}</Text>
        </View>
    );
}

export default Message;
