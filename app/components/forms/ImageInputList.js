import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    img: {
        margin: 5,
        overflow: "hidden",
    },
});

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
    return (
        <View style={styles.container}>
            {imageUris.length > 0
                ? imageUris.map((uri) => (
                      <ImageInput imageUri={uri.uri} onChangeImage={() => onRemoveImage(uri.uri)} key={uri.id} style={styles.img} />
                  ))
                : null}
            <ImageInput imageUri={null} onChangeImage={onAddImage} style={styles.img} />
        </View>
    );
}

export default ImageInputList;
