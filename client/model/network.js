import {Model} from './model.js'
export class NetworkModel extends Model {
    constructor(){
        super();
        this.req = new XMLHttpRequest();
        this.URI = this.serverURI + 'network';
    }

    sendNetwork(network) {
        this.req.open('POST', this.URI);
        this.req.setRequestHeader('Content-Type', 'application/json');
        this.req.send(JSON.stringify(network));
        console.log(this.req.responseText);
    
    }
}