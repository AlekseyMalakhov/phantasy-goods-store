import client from "./client";
import { authClient } from "./client";
import { store } from "../store/store";
import { changeItems, changeLoadingAnimation, changeError } from "../store/items";

const dispatch = store.dispatch;

const addItem = (formData) => {
    return authClient
        .post("/addItem", formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.status;
        })
        .catch((error) => console.log(error.message));
};

const getItems = () => {
    dispatch(changeLoadingAnimation(true));
    dispatch(changeError(""));
    client
        .get("/getItems")
        .then((response) => {
            dispatch(changeLoadingAnimation(false));
            if (response.status === 200) {
                dispatch(changeItems(response.data));
            } else {
                dispatch(changeError("Some error occurred. Please try later"));
            }
        })
        .catch((err) => {
            dispatch(changeLoadingAnimation(false));
            dispatch(changeError("Some error occurred. Please try later"));
            console.log(err.message);
        });
};

const itemsAPI = {
    addItem,
    getItems,
};

export default itemsAPI;
