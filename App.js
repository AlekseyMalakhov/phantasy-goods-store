import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

const styles = StyleSheet.create({});

export default function App() {
    return (
        <Provider store={store}>
            <Screen>
                <Text style={{ textAlign: "center", fontSize: 30 }}>Hello world</Text>
                {/* <NavigationContainer>
                    <Sidebar />
                </NavigationContainer> */}
            </Screen>
        </Provider>
    );
}
