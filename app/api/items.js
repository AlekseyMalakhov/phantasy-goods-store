import client from "./client";
import { store } from "../store/store";
import { changeItems } from "../store/items";

const dispatch = store.dispatch;

const addItem = (formData) => {
    return client
        .post("/addItem", formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.status;
        })
        .catch((error) => error.response.status);
};

const getItems = () => {
    client
        .get("/getItems")
        .then((response) => {
            //setLoading(false);
            dispatch(changeItems(response.data));
            // if (status === 201) {
            //     setError(false);
            // } else {
            //     setError(true);
            // }
        })
        .catch((err) => {
            //setLoading(false);
            //setError("Some error occurred. Please try later");
            console.log(err);
        });
};

const itemsAPI = {
    addItem,
    getItems,
};

export default itemsAPI;
