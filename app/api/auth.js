import client, { createAuthClient } from "./client";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { store } from "../store/store";
import { changeAccessToken, changeUser } from "../store/user";
import messagesAPI from "./messages";
import { changeLoadingAnimation, changeError } from "../store/items";

const dispatch = store.dispatch;

const accessTokenKey = "accessToken_phantasy-goods-store";
const refreshTokenKey = "refreshToken_phantasy-goods-store";

const storeTokens = async (tokens) => {
    try {
        await SecureStore.setItemAsync(accessTokenKey, tokens.accessToken);
        await SecureStore.setItemAsync(refreshTokenKey, tokens.refreshToken);
    } catch (error) {
        console.log(error);
    }
};

const getTokens = async () => {
    try {
        const accessToken = await SecureStore.getItemAsync(accessTokenKey);
        const refreshToken = await SecureStore.getItemAsync(refreshTokenKey);
        const tokens = { accessToken, refreshToken };
        return tokens;
    } catch (error) {
        console.log(error);
    }
};

const removeTokens = async () => {
    try {
        await SecureStore.deleteItemAsync(accessTokenKey);
        await SecureStore.deleteItemAsync(refreshTokenKey);
    } catch (error) {
        console.log(error);
    }
};

const refreshToken = (refreshToken) => {
    dispatch(changeLoadingAnimation(true));
    dispatch(changeError(""));
    client
        .post("/refreshToken", { refreshToken })
        .then(async (response) => {
            dispatch(changeLoadingAnimation(false));
            if (response.status === 200) {
                dispatch(changeAccessToken(response.data));
                console.log(response.data);
                await SecureStore.setItemAsync(accessTokenKey, response.data);
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

const checkExpired = (token) => {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
        return true;
    }
    return false;
};

const startUser = (accessToken) => {
    dispatch(changeAccessToken(accessToken));
    createAuthClient(accessToken);
    const user = jwtDecode(accessToken);
    dispatch(changeUser(user));
    messagesAPI.getMessages(user.id);
};

const login = (data) => {
    return client
        .post("/login", data)
        .then((response) => {
            const tokens = response.data;
            storeTokens(tokens);
            startUser(tokens.accessToken);
            return response.status;
        })
        .catch((error) => error.response.status);
};

const logout = () => {
    removeTokens();
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
    getTokens,
    checkExpired,
    refreshToken,
};

export default authAPI;
