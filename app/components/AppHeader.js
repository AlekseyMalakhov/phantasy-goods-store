import React from "react";
import { StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";
import AppTitleIcon from "./AppTitleIcon";
import colors from "../config/colors";
import CartHeaderButton from "./CartHeaderButton";

const styles = StyleSheet.create({});

function AppHeader({ navigation }) {
    return (
        <Header
            backgroundColor={colors.primaryColor}
            leftComponent={{ icon: "menu", color: "#fff", iconStyle: { color: "#fff" }, onPress: () => navigation.toggleDrawer() }}
            centerComponent={AppTitleIcon}
            rightComponent={<CartHeaderButton />}
        />
    );
}

export default AppHeader;
