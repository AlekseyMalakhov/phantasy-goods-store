import client from "./client";

const sendMessage = (data) => {
    return client
        .post("/sendMessage", data)
        .then((response) => {
            return response.status;
        })
        .catch((error) => error.response.status);
};

const messagesAPI = {
    sendMessage,
};

export default messagesAPI;
