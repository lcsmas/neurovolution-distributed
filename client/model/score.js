import {Model} from './model.js'
export class ScoreModel extends Model {
    constructor(){
        super();
        this.req = new XMLHttpRequest();
        this.URI = this.serverURI + 'score';
    }
    
    getTopK(k) {
        const topkURI = this.URI + `/top/${k}`
        this.req.open('GET', topkURI, false);
        this.req.send();
        return JSON.parse(this.req.responseText);
    }
}

