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

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});

const Buy = ({ navigation }) => {
    return <BuyScreen items={[items[0], items[1]]} />;
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CardsList"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BuyScreen" component={Buy} />
            <Stack.Screen name="CardsList" component={CardsList} />
            <Stack.Screen name="ItemScreen" component={ItemScreen} />
        </Stack.Navigator>
    );
};

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

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
                    <Drawer.Screen name="Account" component={AuthNavigator} />
                    {/* <Drawer.Screen name="BuyScreen" component={Buy} />
                    <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                    <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Drawer.Screen name="CardsList" component={CardsList} /> */}
                </Drawer.Navigator>
            </NavigationContainer>
        </Screen>
    );
}
