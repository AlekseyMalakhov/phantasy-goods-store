import client, { createAuthClient } from "./client";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { store } from "../store/store";
import { changeAccessToken, changeUser } from "../store/user";
import messagesAPI from "./messages";

const dispatch = store.dispatch;

const key = "authToken_phantasy-goods-store";

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

const startUser = (token) => {
    dispatch(changeAccessToken(token));
    createAuthClient(token);
    const user = jwtDecode(token);
    dispatch(changeUser(user));
    messagesAPI.getMessages(user.id);
};

const login = (data) => {
    return client
        .post("/login", data)
        .then((response) => {
            const token = response.data;
            storeToken(token);
            startUser(token);
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

//login({ email: "jim@test.com", password: "12345" });

const authAPI = {
    login,
    logout,
    createAccount,
    startUser,
    getToken,
};

export default authAPI;
