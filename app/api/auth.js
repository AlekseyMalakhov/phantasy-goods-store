import client from "./client";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

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

const getUser = async () => {
    const token = await getToken();
    if (token) {
        return jwtDecode(token);
    }
    return null;
};

const login = (data) => {
    return client
        .post("/login", data)
        .then((response) => {
            const token = response.data;
            storeToken(token);
            console.log(token);
            console.log(jwtDecode(token));
            return response.status;
        })
        .catch((error) => error.response.status);
};

const authAPI = {
    login,
};

export default authAPI;
