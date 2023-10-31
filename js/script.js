
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
            newText: '',
            lastId: 4,
        }
    },
    methods: {
        removeTask(i){
            this.tasks.splice(i,1);
        },
        addTask(){
            console.log('ciao')
            this.lastId++;
            const newTask = {
                text: this.newText,
                done:false,
                id: this.lastId,
            }
            this.tasks.push(newTask);
            this.newText = '';
        }
    }
}).mount('#app')

// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.