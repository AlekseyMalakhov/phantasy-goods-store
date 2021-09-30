import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import Message from "../components/Message";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

function MessagesScreen(props) {
    const messages = useSelector((state) => state.user.messages);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, marginTop: 20 }}>My messages</Text>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </View>
    );
}

export default MessagesScreen;
