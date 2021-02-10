export class ModelDefault {
    setField(field, value){
        this[field] = value;
        return this;
    }

    emptyMe(fields){
        ((fields) ? fields : Object.keys(this)).map(field => this[field] = null)
        return this;
    }
}
