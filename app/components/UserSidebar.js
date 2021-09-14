import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {},
});

function UserSidebar(props) {
    return (
        <View style={styles.container}>
            <Text>User name</Text>
        </View>
    );
}

export default UserSidebar;
