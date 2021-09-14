import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    avatar: {
        marginTop: 20,
    },
});

function UserScreen(props) {
    return (
        <View style={styles.container}>
            <Avatar rounded size="xlarge" source={{ uri: "https://picsum.photos/200" }} containerStyle={styles.avatar} />
            <Text style={{ fontSize: 30, marginTop: 20 }}>Username</Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>Email</Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>My messages</Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>My selling items</Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>My purchased items</Text>
        </View>
    );
}

export default UserScreen;
