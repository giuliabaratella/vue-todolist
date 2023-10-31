
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
        removeTask(i){
            this.tasks.splice(i,1);
        }
    }
}).mount('#app')

// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.