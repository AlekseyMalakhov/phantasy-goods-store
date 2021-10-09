import client from "./client";
import { store } from "../store/store";
import { changeMessages } from "../store/user";

const dispatch = store.dispatch;

const getMessages = (userId) => {
    client.get("/getMessages?userId=" + userId).then((response) => {
        dispatch(changeMessages(response.data));
    });
};

const sendMessage = (data) => {
    return client
        .post("/sendMessage", data)
        .then((response) => {
            return response.status;
        })
        .catch((error) => error.response.status);
};

const messagesAPI = {
    getMessages,
    sendMessage,
};

export default messagesAPI;
