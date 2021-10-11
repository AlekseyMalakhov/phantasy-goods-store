import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyScreen from "../screens/BuyScreen";
import CardsList from "../screens/CardsList";
import ItemScreen from "../screens/ItemScreen";
import WriteMessageScreen from "../screens/WriteMessageScreen";
import MessageSentSuccessfully from "../screens/MessageSentSuccessfully";
import MessagesScreen from "../screens/MessagesScreen";
import ItemAddedSuccessfully from "../screens/ItemAddedSuccessfully";

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
            <Stack.Screen name="MessageSentSuccessfully" component={MessageSentSuccessfully} />
            <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
            <Stack.Screen name="ItemAddedSuccessfully" component={ItemAddedSuccessfully} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
