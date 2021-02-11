import {ModelDefault} from "./model.default";
import {RequestModel} from "./request.model";

export class SettingsModel extends ModelDefault{
    url;
    body;
    headers;

    constructor(request = new RequestModel()) {
        super();
        this.url = request.url;
        this.body = request.body;
        this.headers = request.headers;
    }
}
