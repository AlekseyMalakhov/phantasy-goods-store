import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import colors from "../config/colors";

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 0,
    },
});

function AppCard(props) {
    return (
        <Card containerStyle={styles.card}>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image source={require("../assets/land.jpg")}></Card.Image>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: colors.primaryDarkColor }}
                    title="VIEW NOW"
                />
            </View>
        </Card>
    );
}

export default AppCard;
