/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/



const name = 'Fabio';

// Dichiara la funzione qui.

function greeting(nome) {
    const now = new Date().getHours(); // Ottiene l'ora corrente
    
    let salute;
    
    if (now < 13) {
      salute = 'Buongiorno';
    } else if (now < 17) {
      salute = 'Buon pomeriggio';
    } else {
      salute = 'Buonasera';
    }
    
    alert(`${salute} ${nome}.`); // Mostra il saluto in un alert
  }
  

// // Invoca la funzione qui e stampa il risultato in console


console.log(greeting(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// RISULTATO ALTERNATIVO

// function sayHello (input){

//   const date = new Date();
//   const hour = date.getHours();
//   let greetings;

//   if (hour < 13) {
//     greetings = (`Buongiorno ${input}`);
//   } else if (hour < 17) {
//     greetings = (`Buon pomeriggio ${input}`);
//   }
//    greetings =  (`Buonasera ${input}`);

//   return `${greetings} ${input}.`;// risultato della funzione che ritorna
// }

// console.log(sayHello(name)); // risultato della funzione che stampa il risultato in console