import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Message from "../components/Message";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

function MessagesScreen(props) {
    const messages = useSelector((state) => state.user.messages);

    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        let arr = [];
        if (messages) {
            arr = [...messages.incoming, ...messages.outgoing];
        }
        setMessagesList(arr);
    }, [messages]);
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }}>
                <Text style={{ fontSize: 20, marginTop: 20, textAlign: "center" }}>My messages</Text>
                {messagesList.map((message) => (
                    <Message key={message.id + "_" + message.type} message={message} />
                ))}
                {messagesList.length === 0 ? <Text style={{ marginTop: 20, textAlign: "center" }}>You don't have any messages</Text> : null}
            </ScrollView>
        </View>
    );
}

export default MessagesScreen;
