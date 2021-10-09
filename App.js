import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import Sidebar from "./app/components/Sidebar";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { changeItems } from "./app/store/items";
import itemsAPI from "./app/api/items";

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});

const dispatch = store.dispatch;

export default function App() {
    useEffect(() => {
        //setLoading(true);
        itemsAPI
            .getItems()
            .then((resp) => {
                dispatch(changeItems(resp.data));
                // setLoading(false);
                // if (status === 201) {
                //     setError(false);
                //     navigation.navigate("MessageSentSuccessfully");
                // } else {
                //     setError(true);
                // }
            })
            .catch((err) => {
                //setLoading(false);
                //setError("Some error occurred. Please try later");
                console.log(err);
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
