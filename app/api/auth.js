import client from "./client";

const login = (data) => {
    client.post("/login", data).then((resp) => console.log(resp.data));
};

const authAPI = {
    login,
};

export default authAPI;
