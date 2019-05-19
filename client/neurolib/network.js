import { Layer } from './layer.js'
export class Network {
    //  Args are integer which are the number of neurons
    //  In this version we can only have one hidden layer (out of time)
    constructor(options) {
        if (typeof options != 'undefined'){
            this.inputLayer = new Layer(options.inputLayerSize);
            this.hiddenLayer = new Layer(options.hiddenLayerSize);
            this.outputLayer = new Layer(options.outputLayerSize);

            this.inputLayer.connect(this.hiddenLayer);
            this.hiddenLayer.connect(this.outputLayer);
        }
        
    }

    //  Activate the network with a given input
    activate(input){
        this.inputLayer.activate(input);
        this.hiddenLayer.activate();
        return this.outputLayer.activate();
    }

    setInputLayer(inputLayer){
        this.inputLayer = inputLayer;
    }

    setHiddenLayer(hiddenLayer){
        this.hiddenLayer = hiddenLayer;
    }

    setOutputLayer(outputLayer){
        this.outputLayer = outputLayer;
    }

    clone(){
        let n = new Network();
        
        // n.setInputLayer(this.inputLayer);
        // n.setHiddenLayer(this.hiddenLayer);
        // n.setOutputLayer(this.outputLayer); 
        Object.assign(n, this);
        return n;
    }
    
    
}