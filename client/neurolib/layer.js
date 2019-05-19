import { Neuron } from './neuron.js';
export class Layer {
    constructor(size) {
        this.neurons = [];
        for(let i = 0; i < size; i++){
            this.neurons.push(new Neuron());
        }
    }

    activate(input){
        for( const neuron of this.neurons ){
            neuron.activate(input);
        }
    }

    connect(layer){
        //  Connect all the neuron of the current layer with all the neurons 
        //  of the layer in param
        for( const neuronOfCurrentLayer of this.neurons ){
            for ( const neuronOfNextLayer of layer.neurons ){
                neuronOfCurrentLayer.connect(neuronOfNextLayer);
            }
        }
    }
}