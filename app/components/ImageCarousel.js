import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-anchor-carousel";
import SimplePaginationDot from "./SimplePaginationDot";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {},
    carousel: {
        flexGrow: 0,
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 100,
        fontWeight: "bold",
    },
});

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <Image source={item} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                style={styles.carousel}
                data={images}
                renderItem={renderItem}
                itemWidth={width}
                containerWidth={width - 10}
                ref={(c) => {
                    this.numberCarousel = c;
                }}
                onScrollEnd={(item, index) => setCurrentIndex(index)}
            />
            <SimplePaginationDot currentIndex={currentIndex} length={images.length} color="grey" style={{ marginTop: 10 }} />
        </View>
    );
}

export default ImageCarousel;
