import {ModelDefault} from "./model.default";

export class RequestModel extends ModelDefault{
    url = 'https://randomuser.me/api/';
    body;
    headers = [];

    addHeader(header){
        this.headers[header.key] = header.value;
        return this;
    }
}
