import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-anchor-carousel";

const { width } = Dimensions.get("window");

const data = [{ backgroundColor: "red" }, { backgroundColor: "green" }, { backgroundColor: "blue" }, { backgroundColor: "yellow" }];

const styles = StyleSheet.create({
    container: {},
    carousel: {
        flexGrow: 0,
        backgroundColor: "orange",
        //height: 200,
    },
    item: {
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 100,
        fontWeight: "bold",
    },
});

function ImageCarousel(props) {
    const renderItem = ({ item, index }) => {
        const { backgroundColor } = item;
        return (
            <TouchableOpacity
                style={[styles.item, { backgroundColor }]}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <Text style={styles.text}>{index.toString()}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text>Carousel</Text>
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 10}
                ref={(c) => {
                    this.numberCarousel = c;
                }}
            />
        </View>
    );
}

export default ImageCarousel;
