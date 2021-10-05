import client from "./client";

const addItem = (formData) => {
    return client
        .post("/addItem", formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.status;
        })
        .catch((error) => error.response.status);
};

const itemsAPI = {
    addItem,
};

export default itemsAPI;
