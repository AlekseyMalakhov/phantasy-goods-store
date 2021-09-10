import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import colors from "../config/colors";
import FormInput from "../components/forms/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import FormImagePicker from "../components/forms/FormImagePicker";
import { Picker } from "@react-native-picker/picker";
import AppFormPicker from "../components/forms/AppFormPicker";
import typesOfItems from "../config/typesOfItems";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "white",
        flex: 1,
    },
    title2: {
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18,
    },
    button: {
        borderRadius: 5,
        width: 100,
        marginHorizontal: 20,
    },
    create: {
        backgroundColor: colors.primaryDarkColor,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
});

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image"),
    name: Yup.string().required().label("Name"),
    type: Yup.object().required().label("Type"),
    description: Yup.string().required().label("Description"),
    price: Yup.number().required().label("Price").typeError("Price must be a number"),
});

function CreateItemScreen({ navigation }) {
    const submit = (values) => {
        console.log(values);
    };

    const reset = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Items" }],
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title2}>Create item to sell</Text>
                <Formik
                    initialValues={{
                        images: [],
                        name: "",
                        type: typesOfItems[0],
                        description: "",
                        price: "",
                    }}
                    onSubmit={submit}
                    onReset={reset}
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit, handleReset }) => (
                        <React.Fragment>
                            <FormImagePicker name="images" />

                            <FormInput placeholder="Name" name="name" style={{ marginTop: 10 }} />
                            <AppFormPicker name="type" mode="dropdown">
                                {typesOfItems.map((type) => (
                                    <Picker.Item label={type.name} value={type} style={{ fontSize: 18 }} key={type.id} />
                                ))}
                            </AppFormPicker>
                            <FormInput placeholder="Price" name="price" />
                            <FormInput placeholder="Description" name="description" multiline numberOfLines={4} />
                            <View style={styles.buttons}>
                                <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={handleReset} />
                                <Button buttonStyle={[styles.button, styles.create]} title="Create" onPress={handleSubmit} />
                            </View>
                        </React.Fragment>
                    )}
                </Formik>
            </ScrollView>
        </View>
    );
}

export default CreateItemScreen;
