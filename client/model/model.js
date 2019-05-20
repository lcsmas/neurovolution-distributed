export class Model {
    constructor(){
        this.serverURI = "http://localhost:3000/";
    }

    isOnline(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.serverURI, false);
        try {
            xhr.send();
        } catch (error) {
            console.log('Server is offline ! Training offline .......');
            return false;
        }
        return true;
    }
}

