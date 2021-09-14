import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyScreen from "../app/screens/BuyScreen";
import CardsList from "../app/screens/CardsList";
import ItemScreen from "../app/screens/ItemScreen";
import items from "../app/config/items";

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
