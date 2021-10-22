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

const refreshToken = async (refreshToken) => {
    dispatch(changeLoadingAnimation(true));
    dispatch(changeError(""));
    try {
        const response = await client.post("/refreshToken", { refreshToken });
        dispatch(changeLoadingAnimation(false));
        if (response.status === 200) {
            const accessToken = response.data;
            dispatch(changeAccessToken(accessToken));
            createAuthClient(accessToken);
            await SecureStore.setItemAsync(accessTokenKey, accessToken);
            return { accessToken, refreshToken };
        } else {
            console.log("refreshToken - " + err.message);
            return false;
        }
    } catch (error) {
        dispatch(changeLoadingAnimation(false));
        console.log("refreshToken - " + error.message);
        return false;
    }
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

const checkTokens = async () => {
    const tokens = await getTokens();
    console.log(tokens);
    if (tokens.accessToken) {
        if (checkExpired(tokens.accessToken)) {
            console.log("old token");
            const refreshedTokens = await refreshToken(tokens.refreshToken);
            if (refreshedTokens) {
                console.log("token refreshed");
                return refreshedTokens;
            }
            console.log("token NOT refreshed");
            return false;
        } else {
            console.log("good token");
            return tokens;
        }
    } else {
        return false;
    }
};

const authAPI = {
    login,
    logout,
    createAccount,
    startUser,
    getTokens,
    checkExpired,
    refreshToken,
    checkTokens,
};

export default authAPI;
