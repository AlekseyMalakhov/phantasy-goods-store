import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ImageInput from "./ImageInput";

const styles = StyleSheet.create({
    container: {},
});

function ImageSingleInput({ name, ...otherProps }) {
    const { setFieldValue, errors, touched, setFieldTouched, values } = useFormikContext();

    const addImage = (imageURI) => {
        setFieldValue(name, imageURI);
        setFieldTouched(name);
    };

    return <ImageInput imageUri={values.image} onChangeImage={addImage} {...otherProps} />;
}

export default ImageSingleInput;
