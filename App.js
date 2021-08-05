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

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
    backButton: {
        marginTop: 10,
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.secondaryColor,
    },
    backButtonContainer: {
        width: 95,
        height: 60,
        position: "absolute",
        top: 100,
    },
});

export default function App() {
    return (
        <Screen>
            <AppHeader />
            {/* <CardsList /> */}

            <ItemScreen item={items[1]} />
            <View style={styles.backButtonContainer}>
                <Button icon={<Icon name="arrow-back" size={25} color={colors.secondaryTextColor} />} buttonStyle={styles.backButton} />
            </View>
        </Screen>
    );
}
