import { authClient } from "./client";
import { store } from "../store/store";
import { changeMessages } from "../store/user";

// const dispatch = store.dispatch;

// const getMessages = (userId) => {
//     authClient
//         .get("/getMessages?userId=" + userId)
//         .then((response) => {
//             dispatch(changeMessages(response.data));
//         })
//         .catch((error) => console.log(error.message));
// };

// const sendMessage = (data) => {
//     return authClient.post("/sendMessage", data).then((response) => {
//         return response.status;
//     });
// };

// const messagesAPI = {
//     getMessages,
//     sendMessage,
// };

const messagesAPI = "";

export default messagesAPI;
