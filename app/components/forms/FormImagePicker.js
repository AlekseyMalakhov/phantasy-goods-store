import React, { useState } from "react";
import ImageInputList from "./ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { Text } from "react-native";
import colors from "../../config/colors";

function FormImagePicker({ name, ...otherProps }) {
    const { setFieldValue, errors, touched, setFieldTouched, values } = useFormikContext();

    const addImage = (imageURI) => {
        const newUris = [...values[name]];
        const newURI = {
            uri: imageURI,
            id: Date.now(),
        };
        newUris.push(newURI);
        setFieldValue(name, newUris);
        setFieldTouched(name);
    };

    const removeImage = (imgToRemove) => {
        const newUris = [...values[name]];
        const result = newUris.filter((img) => img.uri !== imgToRemove);
        setFieldValue(name, result);
    };

    return (
        <React.Fragment>
            <ImageInputList imageUris={values[name]} onAddImage={addImage} onRemoveImage={removeImage} {...otherProps} />
            <Text style={{ marginLeft: 10, color: colors.primaryColor, marginTop: 5 }}>Add photos (max 5)</Text>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    );
}

export default FormImagePicker;
