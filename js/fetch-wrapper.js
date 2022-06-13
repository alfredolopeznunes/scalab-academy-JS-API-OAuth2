import { errorApi } from "./error.js";

export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
        .catch(error => {
            errorApi(error);
        });
    }
}