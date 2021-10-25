import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AppCard from "../components/AppCard";
import { useSelector } from "react-redux";
import LoadingIndicator from "../components/LoadingIndicator";

const styles = StyleSheet.create({
    container: {},
    loading: {
        height: "20%",
        width: "20%",
        marginBottom: 100,
    },
    error: {
        color: "red",
        textAlign: "center",
        fontSize: 16,
        marginTop: 30,
    },
});

function CardsList({ navigation, userItems }) {
    const items = useSelector((state) => state.items.items);
    const loading = useSelector((state) => state.items.loadingAnimation);
    const error = useSelector((state) => state.items.error);

    return (
        <React.Fragment>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <FlatList
                data={items.length > 0 ? items : []}
                renderItem={({ item }) => <AppCard item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id.toString()}
            />
            <LoadingIndicator visible={loading} style={styles.loading} />
        </React.Fragment>
    );
}

export default CardsList;
