import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../config/colors";

const styles = StyleSheet.create({
    backButtonContainer: {
        width: 95,
        height: 60,
        position: "absolute",
        top: 100,
    },
    backButton: {
        marginTop: 10,
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.secondaryColor,
    },
});

function BackButton() {
    return (
        <View style={styles.backButtonContainer}>
            <Button icon={<Icon name="arrow-back" size={25} color={colors.secondaryTextColor} />} buttonStyle={styles.backButton} />
        </View>
    );
}

export default BackButton;
