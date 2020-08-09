/*Összegző algoritmus: */

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ossz = 0;

// function összegzo() { 
  for (let i = 0; i < numArray.length; i++) {
    ossz += numArray[i];
  }
console.log(ossz);

// összegzo();

/*Számláló alogritmus: */
let numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
let count = 0;
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i] > 3) {
    count++;
  }
}
console.log(count);

/* Szélsőérték keresés - min., max.
legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
  szám = következő elem
  HA szám < legnagyobb, AKKOR
    legnagyobb = szám
  FELTÉTEL VÉGE
CIKLUS VÉGE
*/
numArray = [1, 3, 2, 6, 8, 3, 4, 6, 7];
max = numArray[0];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i];
  }
}
console.log('The biggest element: ', max);

/* Min.: kb. uez:*/
numArray = [1, 3, 2, 6, 8, 3, 4, 5, 7];
min = numArray[0];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] < min) {
    min = numArray[i];
  }
}
console.log('The smallest element: ', min);

/* Eldöntés - keresés
találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
  elem = következő elem
  HA keresett tulajdonságú az elem, AKKOR
    találat = IGAZ
  FELTÉTEL VÉGE
CIKLUS VÉGE 
*/


let contains = false;
for (let i = 0; i < numArray.length && contains == false;// vagy !contains
   i++) {
  if (numArray[i] == 15) {
    contains = true;
  }
}
console.log('This array contains 15: ', contains);


