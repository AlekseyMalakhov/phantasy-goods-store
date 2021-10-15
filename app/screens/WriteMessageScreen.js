import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import colors from "../config/colors";
import messagesAPI from "../api/messages";
import { useSelector } from "react-redux";
import { useLinkTo } from "@react-navigation/native";
import LoadingIndicator from "../components/LoadingIndicator";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: "center",
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
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginHorizontal: 30,
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
    const linkTo = useLinkTo();

    const { seller } = route.params;
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        const messageObj = {
            fromId: user.id,
            toId: seller.id,
            text: message,
            date: Date.now(),
        };
        setLoading(true);
        messagesAPI
            .sendMessage(messageObj)
            .then((status) => {
                setLoading(false);
                if (status === 201) {
                    setError(false);
                    navigation.navigate("MessageSentSuccessfully");
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                console.log(err.message);
            });
    };

    if (user) {
        return (
            <React.Fragment>
                <LoadingIndicator visible={loading} />
                <View style={styles.container}>
                    <Text style={styles.title}>Send message to {seller.name}</Text>
                    {error ? (
                        <Text style={styles.error}>
                            Some error occurred.Message could not be sent. Please try again later or contact administrator.
                        </Text>
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
                        <Button
                            buttonStyle={[styles.button, styles.create]}
                            title="Create"
                            disabled={!message ? true : false}
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
            </React.Fragment>
        );
    } else {
        return (
            <View style={(styles.container, { alignItems: "center" })}>
                <Text style={styles.title}>To send message to seller please login</Text>
                <Button buttonStyle={[styles.button, styles.create, { marginTop: 20 }]} title="Login" onPress={() => linkTo("/User")} />
            </View>
        );
    }
}

export default WriteMessageScreen;
