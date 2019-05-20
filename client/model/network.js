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
    }

    getTopKNetwork(k) {
        const topkURI = `/top/${k}`;
        this.req.open('GET', this.URI + topkURI, false);
        this.req.send();
        return JSON.parse(this.req.responseText);
    }

    getUUID(){
        const URI = this.URI + '/uuid';
        this.req.open('GET', URI, false);
        this.req.send();
        return this.req.responseText;
    }

    count(){
        const URI = this.URI + '/count';
        this.req.open('GET', URI, false);
        this.req.send();
        return JSON.parse(this.req.responseText).count;
    }

    
}