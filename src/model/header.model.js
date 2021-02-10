import {ModelDefault} from "./model.default";

export class HeaderModel extends ModelDefault{
    id;
    key;
    value;


    constructor(key, value) {
        super();
        this.key = key;
        this.value = value;
    }
}
