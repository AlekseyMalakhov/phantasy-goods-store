import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyScreen from "../screens/BuyScreen";
import CardsList from "../screens/CardsList";
import ItemScreen from "../screens/ItemScreen";
import items from "../config/items";

const Stack = createNativeStackNavigator();

const Buy = () => {
    return <BuyScreen items={[items[0], items[1]]} />;
};

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

export default AppNavigator;
