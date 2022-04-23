import axios from "axios";

const {
    NODE_ENV,
    REACT_APP_ENVIRONMENT_DEV_API_LINK,
    REACT_APP_ENVIRONMENT_PROD_API_LINK
} = process.env;

export default axios.create({
    baseURL:
        NODE_ENV === "development" ?
            REACT_APP_ENVIRONMENT_DEV_API_LINK: REACT_APP_ENVIRONMENT_PROD_API_LINK,
    headers: {
        "Content-type": "application/json"
    }
});
