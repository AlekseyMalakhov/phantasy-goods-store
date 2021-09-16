import { Constants } from "expo-constants";

const settings = {
    dev: "http://192.168.100.7:3000/api",
    staging: "http://192.168.100.7:3000/api",
    prod: "http://192.168.100.7:3000/api",
};

const getBaseURL = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === "staging") return settings.staging;
    return settings.prod;
};

const baseURL = getBaseURL();

export default baseURL;
