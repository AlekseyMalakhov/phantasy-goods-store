import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import Sidebar from "./app/components/Sidebar";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import itemsAPI from "./app/api/items";
import authAPI from "./app/api/auth";

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});

export default function App() {
    useEffect(() => {
        itemsAPI.getItems();
        authAPI.getToken().then((token) => {
            //console.log(token);
            if (token) {
                authAPI.startUser(token);
            }
        });
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
