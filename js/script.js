                       //- stampare in pagina un item per ogni elemento contenuto in un array
                       //- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
                       //- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
function createVue() {
     new Vue ({
          el: '#myVue',

          data: {
               todoDatabase : ['Corso', 'Programmare','giocare a Cyberpunk', 'dormire']
          },

          methods: {
          }
     })
}
$(document).ready(createVue);