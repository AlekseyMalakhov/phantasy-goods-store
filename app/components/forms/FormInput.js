import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { useFormikContext } from "formik";

const styles = StyleSheet.create({
    container: {},
});

function FormInput({ name, ...otherProps }) {
    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
    return (
        <React.Fragment>
            <Input
                onChangeText={(val) => setFieldValue(name, val)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                name={name}
                {...otherProps}
                errorStyle={{ color: "red" }}
                errorMessage={touched[name] ? errors[name] : null}
            />
        </React.Fragment>
    );
}

export default FormInput;
