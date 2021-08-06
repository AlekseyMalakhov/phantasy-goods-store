import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 37,
    },
    share: {
        color: colors.textLight,
    },
});

function ShareButton({ style }) {
    return (
        <View style={[styles.container, style]}>
            <Button
                buttonStyle={styles.share}
                icon={<Icon name="share" size={25} color={colors.textLight}></Icon>}
                type="clear"
                containerStyle={{ borderRadius: 22 }}
                onPress={() => console.log("share")}
            />
        </View>
    );
}

export default ShareButton;
