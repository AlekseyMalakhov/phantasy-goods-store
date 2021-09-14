import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./app/components/AppHeader";
import Screen from "./app/components/Screen";
import AppCard from "./app/components/AppCard";
import CardsList from "./app/screens/CardsList";
import ItemScreen from "./app/screens/ItemScreen";
import items from "./app/config/items";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "./app/config/colors";
import BackButton from "./app/components/BackButton";
import BuyScreen from "./app/screens/BuyScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CreateItemScreen from "./app/screens/CreateItemScreen";
import UserSidebar from "./app/components/UserSidebar";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Screen>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="MainScreen"
                    screenOptions={{
                        headerShown: true,
                        header: ({ navigation, route, options }) => <AppHeader navigation={navigation} />,
                        drawerStyle: {
                            marginTop: 58,
                        },
                    }}
                >
                    <Drawer.Screen name="Items" component={AppNavigator} />
                    <Drawer.Screen name="Auth" component={AuthNavigator} />
                    <Drawer.Screen name="CreateItemScreen" component={CreateItemScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </Screen>
    );
}
