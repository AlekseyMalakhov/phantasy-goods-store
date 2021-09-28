import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import colors from "../config/colors";
import messagesAPI from "../api/messages";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    messageContainer: {
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "white",
    },
    message: {
        textAlignVertical: "top",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        borderRadius: 5,
        width: 100,
        marginHorizontal: 20,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    create: {
        backgroundColor: colors.primaryDarkColor,
    },
    error: {
        color: "red",
        marginBottom: 10,
        textAlign: "center",
    },
});

function WriteMessageScreen({ route, navigation }) {
    const { item } = route.params;
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        const messageObj = {
            fromId: 34,
            toId: item.seller.id,
            text: message,
            date: Date.now(),
        };
        messagesAPI
            .sendMessage(messageObj)
            .then((status) => {
                if (status === 201) {
                    setError(false);
                    navigation.navigate("MessageSentSuccessfully");
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send message to {item.seller.name}</Text>
            {error ? (
                <Text style={styles.error}>Some error occurred.Message could not be sent. Please try again later or contact administrator.</Text>
            ) : null}
            <Input
                onChangeText={setMessage}
                value={message}
                multiline
                numberOfLines={4}
                inputContainerStyle={styles.messageContainer}
                style={styles.message}
            />
            <View style={styles.buttons}>
                <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={() => navigation.navigate("CardsList")} />
                <Button buttonStyle={[styles.button, styles.create]} title="Create" onPress={handleSubmit} />
            </View>
        </View>
    );
}

export default WriteMessageScreen;
