import {ModelDefault} from "./model.default";

export class RequestModel extends ModelDefault{
    url;
    body;
    headers;
    toPersist;

    constructor() {
        super();
        this.url = '';
        this.body = '';
        this.headers = [];
        this.toPersist = false;
    }

    addHeader(header){
        this.headers[header.key] = header.value;
        return this;
    }
}
