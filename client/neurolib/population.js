import { Network } from './network.js';
export class Population {
    constructor( options ){
        this.network = [];
        this.crossfactor = options.crossfactor || 0.5;
        this.hiddenLayerSize = options.hiddenLayerSize;
        this.individualNumber = options.individualNumber;


        for(let i = 0; i < options.individualNumber; i++){
            this.network.push(new Network( {
                inputLayerSize : options.inputLayerSize,
                hiddenLayerSize : options.hiddenLayerSize,
                outputLayerSize : options.outputLayerSize
            }));
        }
    }

    nextGeneration(){
        let networks = []
        for(let i=0; i < this.individualNumber *0.5; i++){
            networks.push(this.network[i]);
        }
        for(let i=0; i < this.individualNumber * 0.5; i++){
            let n = this.breed(this.network[i],
                this.network[i+1]); 
            networks.push(n);
        }
        return networks;
    }

    breed(father, mother){
        
        const crossindex = Math.floor(this.crossfactor * (this.hiddenLayerSize - 1) );
        //  The child is a father clone.
        //  We will connect some of his neurons of the hidden layer with
        //  neurons of the mother, then we will breed some of the weight 
        //  and perform a mutation on them
        const child = father.clone();
        
        //  Breed number of neuron of the hidden layer depending 
        //  on the crossfactor
        // for(let i = 0; i <= crossindex; i++){
        //     const inputs = mother.hiddenLayer.neurons[i].inputs;
            
        //     //  Neuron that's being breeded
        //     const neuron = child.hiddenLayer.neurons[i];

        //     //  Breed the weights of the neuron depending on the crossfactor
        //     for(let j = 0; j <= Math.floor(this.crossfactor * inputs.length); j++){
        //         inputs[j].weight = neuron.inputs[j].weight;
        //     }
            
        //     // Changing the hidden layer connection partially
        //     neuron.inputs = inputs;
        //     child.outputLayer.neurons[0].inputs[i] = neuron;
            
        // }
        return child;
    }
}