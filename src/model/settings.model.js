import {ModelDefault} from "./model.default";
import {RequestModel} from "./request.model";

export class SettingsModel extends ModelDefault{
    request;

    constructor() {
        super();
        this.request = new RequestModel();
    }
}
