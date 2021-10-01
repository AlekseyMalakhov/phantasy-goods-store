import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    incomingContainer: {
        backgroundColor: "#94ffc7",
        padding: 10,
        margin: 10,
        marginRight: 40,
        borderRadius: 5,
        alignSelf: "stretch",
    },
    outgoingContainer: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        marginLeft: 40,
        borderRadius: 5,
        alignSelf: "stretch",
    },
    info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    date: {
        color: "#606160",
        fontSize: 13,
    },
});

const getTimeString = (messageDate) => {
    const date = new Date(Number(messageDate));
    const _d = date.getDate();
    const d = _d < 10 ? "0" + _d : _d;
    const _m = date.getMonth() + 1;
    const m = _m < 10 ? "0" + _m : _m;
    const y = date.getFullYear();
    const _hs = date.getHours();
    const hs = _hs < 10 ? "0" + _hs : _hs;
    const _ms = date.getMinutes();
    const ms = _ms < 10 ? "0" + _ms : _ms;
    const t = `${hs}:${ms} ${d}.${m}.${y}`;
    return t;
};

function Message({ message }) {
    const user = useSelector((state) => state.user.user);

    const [time, setTime] = useState("");

    useEffect(() => {
        const t = getTimeString(message.date);
        setTime(t);
    }, []);

    console.log(message);

    if (message.type === "incoming") {
        return (
            <View style={styles.incomingContainer}>
                <View style={styles.info}>
                    <Text style={styles.date}>From: {message.from_id_name}</Text>
                    <Text style={styles.date}>{time}</Text>
                </View>
                <Text style={{ display: "flex" }}>{message.text}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.outgoingContainer}>
                <View style={styles.info}>
                    <Text style={styles.date}>To: {message.to_id_name}</Text>
                    <Text style={styles.date}>{time}</Text>
                </View>
                <Text style={{ display: "flex" }}>{message.text}</Text>
            </View>
        );
    }
}

export default Message;
