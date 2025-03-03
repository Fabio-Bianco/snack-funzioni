/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function countVowels(str) {
    let count = 0; // Contatore delle vocali
    const vowels = 'aeiou'; // Le vocali
  
    // Ciclo per scorrere ogni carattere della stringa
    for (let i = 0; i < str.length; i++) {
      // Controlla se il carattere è una vocale
      for (let j = 0; j < vowels.length; j++) {
        if (str[i].toLowerCase() === vowels[j]) {
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

// function countVowels(str) {
//     const vowels = 'aeiou'; 
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//           count++;
//         }
//       }
    
//       return count;
//     }

//     console.log(countVowels(word));