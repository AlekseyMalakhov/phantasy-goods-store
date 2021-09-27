import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyScreen from "../screens/BuyScreen";
import CardsList from "../screens/CardsList";
import ItemScreen from "../screens/ItemScreen";
import WriteMessageScreen from "../screens/WriteMessageScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CardsList"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BuyScreen" component={BuyScreen} />
            <Stack.Screen name="CardsList" component={CardsList} />
            <Stack.Screen name="ItemScreen" component={ItemScreen} />
            <Stack.Screen name="WriteMessageScreen" component={WriteMessageScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
