import React, { useEffect, useState } from "react";
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

    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        const arr = [...messages.incoming, ...messages.outgoing];
        setMessagesList(arr);
        console.log(arr);
    }, [messages]);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginTop: 20 }}>My messages</Text>
            {messagesList.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </View>
    );
}

export default MessagesScreen;
