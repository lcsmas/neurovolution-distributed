import {Model} from './model.js'
export class GenerationModel extends Model {
    constructor(){
        super();
        this.req = new XMLHttpRequest();
        this.URI = this.serverURI + 'generation';
    }

    sendGeneration(gen) {
        this.req.open('POST', this.URI);
        this.req.setRequestHeader('Content-Type', 'application/json');
        this.req.send(JSON.stringify(gen));
        console.log(this.req.responseText);
    
    }
}