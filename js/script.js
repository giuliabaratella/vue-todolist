
const { createApp } = Vue

createApp({
    data(){
        return {
            tasks: [
                {
                    text: 'Buy Halloween costume',
                    done:false,
                    id: 1
                },
                {
                    text: 'Choose horror film to watch',
                    done:true,
                    id: 2
                },
                {
                    text: 'Bake pumpkin cookies',
                    done:false,
                    id: 3
                },
                {
                    text: 'Decorate the house',
                    done:true,
                    id: 4
                },
                
            ],
        }
    },
    methods: {

    }
}).mount('#app')

// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.