import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 25,
    },
});

function AppTitleIcon(props) {
    return <Image source={require("../assets/title_logo.png")} style={styles.img} resizeMode="contain"></Image>;
}

export default AppTitleIcon;
