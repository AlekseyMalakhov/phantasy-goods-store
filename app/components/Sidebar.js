import React from "react";
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppHeader from "./AppHeader";
import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";
import CreateItemScreen from "../../app/screens/CreateItemScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import UserScreen from "../screens/UserScreen";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {},
});

const Drawer = createDrawerNavigator();

function Sidebar(props) {
    const user = useSelector((state) => state.user.user);
    return (
        <Drawer.Navigator
            initialRouteName="Items"
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => <AppHeader navigation={navigation} />,
                drawerStyle: {
                    marginTop: 58,
                },
            }}
        >
            <Drawer.Screen
                name="User"
                component={user.name ? UserScreen : AuthNavigator}
                options={{
                    title: user.name ? user.name : "Anonymous user",
                    drawerIcon: ({ focused }) => (
                        <Icon color={colors.primaryColor} size={35} name={focused ? "account-circle" : "account-circle-outline"} />
                    ),
                }}
            />
            <Drawer.Screen name="Items" component={AppNavigator} />
            <Drawer.Screen name="CreateItemScreen" component={CreateItemScreen} />
        </Drawer.Navigator>
    );
}

export default Sidebar;
