import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
});

function Screen({ children, style }) {
    return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

export default Screen;
