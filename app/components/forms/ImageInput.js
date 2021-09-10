import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: colors.lightGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 80,
        height: 80,
    },
});

function ImageInput({ imageUri, onChangeImage, style }) {
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();
        if (!result.granted) {
            alert("Pls eneble permission!");
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ]);
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container, style]}>
                {!imageUri ? <Icon name="camera" size={30} /> : <Image source={{ uri: imageUri }} style={styles.img} />}
            </View>
        </TouchableOpacity>
    );
}

export default ImageInput;
