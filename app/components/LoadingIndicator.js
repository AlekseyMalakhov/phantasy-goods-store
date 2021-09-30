import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        //backgroundColor: "white",
        height: "100%",
        width: "100%",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        height: "20%",
        width: "20%",
    },
});

function LoadingIndicator({ visible = false }) {
    if (!visible) {
        return null;
    }
    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <LottieView autoPlay loop source={require("../assets/loading.json")} />
            </View>
        </View>
    );
}

export default LoadingIndicator;
