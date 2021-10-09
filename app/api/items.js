import client from "./client";

const addItem = (formData) => {
    return client
        .post("/addItem", formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.status;
        })
        .catch((error) => error.response.status);
};

const getItems = () => {
    return client
        .get("/getItems")
        .then((response) => {
            return response;
        })
        .catch((error) => error.response.status);
};

const itemsAPI = {
    addItem,
    getItems,
};

export default itemsAPI;
