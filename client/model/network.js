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

    getTopKNetwork(k, callback) {
        const topkURI = `/top/${k}`;
        // this.req.onreadystatechange = () => {
        //     if(this.req.readyState == XMLHttpRequest.DONE) {
        //         if(this.req.status == 200) {
        //             const res = 
        //             callback(res);
        //         }
        //     }
        // }
        this.req.open('GET', this.URI + topkURI, false);
        this.req.send();
        return JSON.parse(this.req.responseText);
    }
}