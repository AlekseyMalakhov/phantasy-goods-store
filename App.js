import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import Sidebar from "./app/components/Sidebar";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import itemsAPI from "./app/api/items";

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
