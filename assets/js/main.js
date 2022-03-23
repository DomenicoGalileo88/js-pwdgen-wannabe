// Chiedi all’utente il suo nome
const first_name = prompt('Inserire nome');

console.log(first_name);

// Chiedi il suo cognome
const last_name = prompt('Inserire cognome');

console.log(last_name);

// Chiedi il suo colore preferito
const color = prompt('Inserisci il tuo colore preferito');

console.log(color);

// aggiungi un icona alla fine
const icon = '&check;'

// Scrivi sulla pagina il risultato 
const result = `${first_name}${last_name}${color}${'22'} ${icon}`  ;

document.getElementById('result').innerHTML = result;

console.log(`${first_name}${last_name}${color}${'22'}`);

