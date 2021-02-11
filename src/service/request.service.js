import axios from "axios";

export const RequestService = {
    DISPATCH_REQUEST: (request, verbo) => {
        switch (verbo) {
            case 'GET':
                return dispatch_get(request);
                break;
            case 'POST':
                return dispatch_post(request);
                break;
            case 'PUT':
                return dispatch_put(request);
                break;
            case 'DELETE':
                return dispatch_delete(request);
                break;
        }
    }
};

const dispatch_get = (request) => {
    return axios.get(request.url, request.headers);
};
const dispatch_post = (request) => {
    return axios.post(request.url, request.body, request.headers);
};
const dispatch_put = (request) => {
    return axios.put(request.url, request.body, request.headers);
};
const dispatch_delete = (request) => {
    return axios.delete(request.url, request.headers);
};
