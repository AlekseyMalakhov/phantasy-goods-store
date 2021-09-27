import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {},
});

function WriteMessageScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Send message to seller</Text>
        </View>
    );
}

export default WriteMessageScreen;
