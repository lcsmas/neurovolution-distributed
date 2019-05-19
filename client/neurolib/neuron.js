export class Neuron {
    constructor(){
        this.state = 0;
        this.activation = 0;
        this.bias = this.randomClamped();
        this.inputs = [];
    }

    sigmoid(x) {
        const fx = 1 / (1 + Math.exp(-x));
        return fx;
    }

    // Activate the neuron
    activate(input){
        //  Usefull for the neurons on the input layer
        if (typeof input != 'undefined') {
            this.activation = input;
            this.derivative = 0;
            this.bias = 0;
            return this.activation;
        }

        this.state = this.bias;
        for( const input of this.inputs ) {
            
            if(typeof input.neuron == 'undefined'){
                console.log(input);
            } 
            this.state += input.neuron.activation * input.weight;
            
            
            
        }

        this.activation = this.sigmoid(this.state);
        return this.activation;
    }

    //  We use the sigmoïd as the activation function, 
    //  it output a value between ]0; 1[ for x in ]-inf; +inf[
    

    // It is used for weight and biases initialisation
    randomClamped() {
        return Math.random() * .2 - .1;
    }

    // Connect the calling neuron with the one in param, connection is made from
    // "this" to "neuron"
    connect(neuron){
        neuron.inputs.push( { "neuron" : this, "weight" : this.randomClamped() })
    }
}