import {ModelDefault} from "./model.default";
import {RequestModel} from "./request.model";

export class SettingsModel extends ModelDefault{
    url;
    body;
    headers;
    toPersist;

    constructor(request = new RequestModel(), toPersist = false) {
        super();
        this.url = request.url;
        this.body = request.body;
        this.headers = request.headers;
        this.toPersist = request.toPersist;
    }
}
