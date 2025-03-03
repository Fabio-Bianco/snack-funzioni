/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function countVowels(string) {
    let count = 0; // Contatore delle vocali
    const vowels = 'aeiou'; // Le vocali
  
    // Ciclo per scorrere ogni carattere della stringa
    for (let i = 0; i < str.length; i++) {
      // Controlla se il carattere è una vocale
      for (let j = 0; j < vowels.length; j++) {
        if (string[i].toLowerCase() === vowels[j]) {
          count++;
        }
      }
    }
  
    return count;
  }
  
  // Invoca la funzione e stampa il risultato in console

  console.log(countVowels(word)); 
  
//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// RISULTATO UTILIZZANDO INCLUDES

// function countVowels(string) {
//     const vowels = 'aeiou'; 
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(string[i].toLowerCase())) {
//           count++;
//         }
//       }
    
//       return count;
//     }

//     console.log(countVowels(word));