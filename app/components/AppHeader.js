import React from "react";
import { StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";
import AppTitleIcon from "./AppTitleIcon";
import colors from "../config/colors";

const styles = StyleSheet.create({});

function AppHeader(props) {
    return (
        <Header
            backgroundColor={colors.primaryColor}
            leftComponent={{ icon: "menu", color: "#fff", iconStyle: { color: "#fff" } }}
            centerComponent={AppTitleIcon}
            rightComponent={{ icon: "cart-outline", type: "material-community", color: "#fff" }}
        />
    );
}

export default AppHeader;
