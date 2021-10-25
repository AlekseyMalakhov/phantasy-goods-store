import React, { useEffect } from "react";
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
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import authAPI from "../api/auth";
import { Avatar } from "react-native-elements";
import CardsList from "../screens/CardsList";

const styles = StyleSheet.create({
    container: {},
});

const Drawer = createDrawerNavigator();

function Sidebar(props) {
    const user = useSelector((state) => state.user.user);

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {user ? (
                    <DrawerItem label="Logout" onPress={authAPI.logout} style={{ borderTopWidth: 1, borderTopColor: "black", marginTop: 20 }} />
                ) : null}
            </DrawerContentScrollView>
        );
    };

    return (
        <Drawer.Navigator
            initialRouteName="AppNavigator"
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => <AppHeader navigation={navigation} />,
                drawerStyle: {
                    marginTop: 58,
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="User"
                component={user ? UserScreen : AuthNavigator}
                options={{
                    title: user ? user.name : "Login",
                    drawerIcon: ({ focused }) =>
                        user ? (
                            <Avatar rounded size="medium" source={{ uri: user.img }} />
                        ) : (
                            <Icon color={colors.primaryColor} size={45} name={focused ? "account-circle" : "account-circle-outline"} />
                        ),
                }}
            />
            <Drawer.Screen name="Items" component={CardsList} />
            <Drawer.Screen name="CreateItemScreen" component={CreateItemScreen} options={{ title: "Add item to sell" }} />
            <Drawer.Screen
                name="AppNavigator"
                component={AppNavigator}
                options={{
                    drawerItemStyle: { display: "none" },
                }}
            />
        </Drawer.Navigator>
    );
}

export default Sidebar;
