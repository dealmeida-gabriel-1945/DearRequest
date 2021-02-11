import {ModelDefault} from "./model.default";

export class RequestModel extends ModelDefault{
    url;
    body;
    headers;

    constructor() {
        super();
        this.url = '';
        this.body = '';
        this.headers = [];
    }

    addHeader(header){
        this.headers[header.key] = header.value;
        return this;
    }
}
