import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import { useLinkTo } from "@react-navigation/native";
import itemsAPI from "../api/items";
import LoadingIndicator from "../components/LoadingIndicator";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "white",
        flex: 1,
    },
    title: {
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
    loading: {
        height: "20%",
        width: "20%",
        marginBottom: 100,
    },
    error: {
        color: "red",
        marginBottom: 20,
        textAlign: "center",
    },
});

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image"),
    name: Yup.string().required().label("Name"),
    type: Yup.string().required().label("Type"),
    description: Yup.string().required().label("Description"),
    price: Yup.number().required().label("Price").typeError("Price must be a number"),
});

function CreateItemScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const linkTo = useLinkTo();
    const user = useSelector((state) => state.user.user);
    const submit = (item, actions) => {
        setError("");
        item.seller = user.id;

        const textData = { ...item };
        delete textData.images;

        const textJSONObj = JSON.stringify(textData);
        const imgs = item.images.map((image) => image.uri);

        const formData = new FormData();
        formData.append("text", textJSONObj);

        for (let x in imgs) {
            formData.append("images", imgs[x]);
        }

        setLoading(true);
        itemsAPI
            .addItem(formData)
            .then((status) => {
                console.log(status);
                setLoading(false);
                actions.resetForm();
                if (status === 201) {
                    itemsAPI.getItems();
                    navigation.navigate("ItemAddedSuccessfully");
                } else {
                    setError("Some error occurred. Please try again later");
                }
            })
            .catch((err) => {
                setLoading(false);
                setError("Some error occurred. Please try again later");
                console.log(err);
            });
    };

    const reset = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "AppNavigator" }],
        });
    };

    if (user) {
        return (
            <View style={styles.container}>
                <LoadingIndicator visible={loading} style={styles.loading} />
                <ScrollView>
                    <Text style={styles.title}>Create item to sell</Text>
                    <Formik
                        initialValues={{
                            images: [],
                            name: "",
                            type: typesOfItems[0],
                            description: "",
                            price: "",
                        }}
                        onSubmit={submit}
                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit }) => (
                            <React.Fragment>
                                <FormImagePicker name="images" forAmazon />

                                <FormInput placeholder="Name" name="name" style={{ marginTop: 10 }} />
                                <AppFormPicker name="type" mode="dropdown">
                                    {typesOfItems.map((type) => (
                                        <Picker.Item label={type} value={type} style={{ fontSize: 18 }} key={type} />
                                    ))}
                                </AppFormPicker>
                                <FormInput placeholder="Price" name="price" keyboardType="number-pad" />
                                <FormInput placeholder="Description" name="description" multiline numberOfLines={4} />
                                {error ? <Text style={styles.error}>{error}</Text> : null}
                                <View style={styles.buttons}>
                                    <Button buttonStyle={styles.button} title="Cancel" type="outline" onPress={reset} />
                                    <Button buttonStyle={[styles.button, styles.create]} title="Create" onPress={handleSubmit} />
                                </View>
                            </React.Fragment>
                        )}
                    </Formik>
                </ScrollView>
            </View>
        );
    } else {
        return (
            <View style={(styles.container, { alignItems: "center" })}>
                <Text style={styles.title}>To add item to sell please login</Text>
                <Button buttonStyle={[styles.button, styles.create, { marginTop: 20 }]} title="Login" onPress={() => linkTo("/User")} />
            </View>
        );
    }
}

export default CreateItemScreen;
