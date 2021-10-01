import client from "./client";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { store } from "../store/store";
import { changeAccessToken, changeUser, changeMessages } from "../store/user";

const dispatch = store.dispatch;

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log(error);
    }
};

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(key);
        return authToken;
    } catch (error) {
        console.log(error);
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log(error);
    }
};

const getMessages = (userId) => {
    client.get("/getMessages?userId=" + userId).then((response) => {
        dispatch(changeMessages(response.data));
    });
};

const login = (data) => {
    return client
        .post("/login", data)
        .then((response) => {
            const token = response.data;
            storeToken(token);
            dispatch(changeAccessToken(token));
            const user = jwtDecode(token);
            dispatch(changeUser(user));
            getMessages(user.id);
            return response.status;
        })
        .catch((error) => error.response.status);
};

const logout = () => {
    removeToken();
    dispatch(changeAccessToken(""));
    dispatch(changeUser(null));
};

const createAccount = (formData) => {
    return client
        .post("/createAccount", formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.status;
        })
        .catch((error) => error.response.status);
};

login({ email: "test2@ttt.com", password: "12345" });

const authAPI = {
    login,
    logout,
    createAccount,
};

export default authAPI;
