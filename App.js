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
import BackButton from "./app/components/BackButton";
import BuyScreen from "./app/screens/BuyScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Buy = ({ navigation }) => {
    return <BuyScreen items={[items[0], items[1]]} />;
};

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        // <Screen>
        //     <AppHeader />
        //     {/* <CardsList /> */}
        //     {/* <ItemScreen item={items[0]} />
        //     <BackButton /> */}
        //     <BuyScreen items={[items[0], items[1]]} />
        // </Screen>
        <Screen>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="BuyScreen"
                    screenOptions={{
                        headerShown: true,
                        header: ({ navigation, route, options }) => <AppHeader navigation={navigation} />,
                        drawerStyle: {
                            marginTop: 58,
                        },
                    }}
                >
                    <Drawer.Screen name="BuyScreen" component={Buy} />
                    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </Screen>
    );
}
