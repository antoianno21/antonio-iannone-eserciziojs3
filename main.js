// ES2: creare un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda (ovviamente in console)
// mostrare un singolo contatto (in base al nome del contatto)
// eliminare un contatto dall’agenda (in base al nome del contatto viene eliminato tutto l'oggetto contatto)
// aggiungere un nuovo contatto (utilizza il metodo push, suggerimento - il contatto è un oggetto, quindi bisogna aggiungere tutto l'oggetto e non solo il singolo numero)




let rubrica = {

contacts: [

    {'firstname': 'Nicola', 'number': '3331111111'},

    {'firstname': 'Lorenzo', 'number': '3332222222'},

    {'firstname': 'Paola', 'number': '3333333333'},

    {'firstname': 'Jenny', 'number': '3334444444'}],

    filtro: function(array) {
        return this.contacts.filter(el=>el.firstname == array) 
        }

        
    }
    console.log(rubrica.contacts);
    
    let scelta = rubrica.filtro('Nicola')
    console.log(scelta);
    



    function rimuovicontatto(input) {
        rubrica.contacts = rubrica.contacts.filter(contatto => contatto.nome !== input);}
    
        rimuovicontatto('Paola');
        console.log(rubrica);
        




    let agg = {'firstname': 'angelo', 'number': '88920084094', }

    rubrica.contacts.push (agg)
    console.log(rubrica.contacts);
    