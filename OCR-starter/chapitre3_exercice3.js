// Seconde suivante

/*
- Stockez dans trois variables
    * l'heure actuelle
    * les minutes actuelles
    * les secondes actuelles
- … (TODO)
*/


const now = new Date();

const heures = now.getHours();
const minutes = now.getMinutes();
const secondes = now.getSeconds()

console.log("Il est actuellement : ",heures,":",minutes,":",secondes);