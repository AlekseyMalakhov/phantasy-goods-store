import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    avatar: {
        marginTop: 20,
    },
});

function UserScreen({ navigation }) {
    const user = useSelector((state) => state.user.user);
    const messages = useSelector((state) => state.user.messages);
    return (
        <View style={styles.container}>
            <Avatar rounded size="xlarge" source={{ uri: user.img }} containerStyle={styles.avatar} />
            <Text style={{ fontSize: 30, marginTop: 20 }}>{user.name}</Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>{user.email}</Text>
            <Text style={{ fontSize: 20, marginTop: 20 }} onPress={() => navigation.navigate("MessagesScreen")}>
                My messages - ({messages ? messages.incoming.length + messages.outgoing.length : 0})
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20 }} onPress={() => navigation.navigate("MySellingItems")}>
                My selling items
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>My purchased items</Text>
        </View>
    );
}

export default UserScreen;
