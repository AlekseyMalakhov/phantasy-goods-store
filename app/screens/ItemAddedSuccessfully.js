import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
    },
    button: {
        marginTop: 30,
        borderRadius: 5,
        paddingHorizontal: 30,
        backgroundColor: colors.primaryDarkColor,
    },
});

function ItemAddedSuccessfully({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Item has been added successfully!</Text>
            <Button buttonStyle={styles.button} title="Go to Items list" onPress={() => navigation.navigate("CardsList")} />
        </View>
    );
}

export default ItemAddedSuccessfully;
