import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AppCard from "../components/AppCard";
import { useSelector } from "react-redux";
import LoadingIndicator from "../components/LoadingIndicator";

const styles = StyleSheet.create({
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

function CardsList({ navigation, itemsForUser }) {
    const items = useSelector((state) => state.items.items);
    const loading = useSelector((state) => state.items.loadingAnimation);
    const error = useSelector((state) => state.items.error);

    const getItems = () => {
        if (items.length > 0) {
            if (!itemsForUser) {
                return items;
            }
            return items.filter((item) => item.seller.id === itemsForUser);
        }
        return [];
    };

    return (
        <React.Fragment>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <FlatList
                data={getItems()}
                renderItem={({ item }) => <AppCard item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id.toString()}
            />
            <LoadingIndicator visible={loading} style={styles.loading} />
        </React.Fragment>
    );
}

export default CardsList;
