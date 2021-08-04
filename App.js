import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./app/components/AppHeader";
import Screen from "./app/components/Screen";
import AppCard from "./app/components/AppCard";
import CardsList from "./app/screens/CardsList";

export default function App() {
    return (
        <Screen>
            <AppHeader />
            <CardsList />
        </Screen>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});
