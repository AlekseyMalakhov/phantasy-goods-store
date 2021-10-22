import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import Sidebar from "./app/components/Sidebar";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import itemsAPI from "./app/api/items";
import authAPI from "./app/api/auth";

const styles = StyleSheet.create({});

export default function App() {
    const getUser = async () => {
        const tokens = await authAPI.checkTokens();
        if (tokens) {
            authAPI.startUser(tokens.accessToken);
        }
    };

    useEffect(() => {
        itemsAPI.getItems();
        getUser();
    }, []);

    return (
        <Provider store={store}>
            <Screen>
                <NavigationContainer>
                    <Sidebar />
                </NavigationContainer>
            </Screen>
        </Provider>
    );
}
