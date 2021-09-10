import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: "black",
        marginHorizontal: 10,
        marginTop: 8,
        marginBottom: 20,
        backgroundColor: colors.textLight,
    },
});

function AppFormPicker({ name, children, ...otherProps }) {
    const { values, setFieldValue, errors, touched, setFieldTouched } = useFormikContext();
    let errText = "";
    if (errors[name]) {
        errText = JSON.stringify(errors[name]);
    }
    return (
        <React.Fragment>
            <Picker
                {...otherProps}
                selectedValue={values[name]}
                onValueChange={(val) => {
                    setFieldTouched(name);
                    setFieldValue(name, val);
                }}
            >
                {children}
            </Picker>
            <View style={styles.line}></View>
            <ErrorMessage error={errText} visible={touched[name]} />
        </React.Fragment>
    );
}

export default AppFormPicker;
